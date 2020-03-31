const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  telephone: String,
  password: { type: String, required: true },
  email: String,
  favoriteProducts: [
    {
      id: String,
    },
  ],
  viewedProducts: [
    {
      id: String,
    },
  ],
  orders: [
    // {
    //   id: String,
    //   username: String,
    //   products: Array,
    //   deliveryType: String,
    //   deliveryAdress: String,
    // },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
