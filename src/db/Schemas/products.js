const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
  id: Number,
  sku: Number,
  name: String,
  description: String,
  price: Number,
  currency: String,
  creatorId: String,
  likes: Number,
  created: String,
  modified: String,
  categories: [],
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
