const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  creator: { type: String, required: true },
  productsList: [
    // {
    //   product: String,
    //   type: String,
    //   itemsCount: String,
    // },
  ],
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  status: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
