const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ReviewSchema} = require('./review');

const ProductSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  image: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'review' }] //[ReviewSchema]
});

module.exports = mongoose.model('product', ProductSchema);
