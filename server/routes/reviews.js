const router = require('express').Router();
const Product = require('../models/product');
const {Review} = require('../models/review');

router.param('review', (req, res, next, id) => {
    Review
    .findById(id) 
    .exec((err, review) => {
        req.review = review;
        next()
    });
});

router.get('/reviews', (req, res, next) => {
    const perPage = 40;

    const page = req.query.page || 1;

    Review
        .find({})
        .populate('reviews')
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((error, reviews) => {
            res.send(reviews);
        }); 
});

router.delete('/reviews/:review', (req, res) => {
    req.review.remove();
    res.send({message: 'Success!'});
});

module.exports = router;