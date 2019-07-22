const router = require('express').Router();
const Product = require('../models/product');
const {Review} = require('../models/review');

router.param('product', (req, res, next, id) => {
    Product
    .findById(id) 
    .exec((err, product) => {
        req.product = product;
        next()
    });
});

router.get('/products', (req, res, next) => {
    const perPage = 9;
    const page = req.query.page || 1;

    const category = req.query.category;
    const price = req.query.price;

    const filter = {};
    const priceSort = {};

    if (category) {
        filter.category = category;
    }

    if (price === 'highest') {
        priceSort.price = -1;
    } else if (price === 'lowest') {
        priceSort.price = 1;
    } 

    Product
        .find(filter)
        .sort(priceSort)
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((error, products) => {
            Product.count().exec((err, count) => {
                if (err) return next(err)

                res.send(products);
            });
        });
});

router.post('/products', (req, res) => {
    const product = new Product({
        category: req.body.category, 
        name: req.body.name, 
        price: req.body.price, 
        image: req.body.image
        //TODO: figure out if I need to add the reviews in here 
    });
    product.save((err, p) => {
        if (err) {
            res.status(500);
            res.send(err);
            return 
        } 
        res.send(p);
    });
});

router.get('/products/:product', (req, res) => {
    res.send(req.product);
});

router.delete('/products/:product', (req, res) => {
    req.product.remove();
    res.send({message: 'Success!'});
});

router.post('/products/:product/reviews', (req, res) => {
    const review = new Review({
        userName: req.body.userName, 
        text: req.body.text, 
        product: req.product._id
    });
      review.save((err, r) => {
        if (err) {
            res.status(500);
            res.send(err);
            return
        }
        req.product.reviews.push(r._id);
        req.product.save((err, p) => {
            if (err) {
                res.status(500);
                res.send(err);
                return
            }
            res.send(p);
        });
    });
});

module.exports = router;
