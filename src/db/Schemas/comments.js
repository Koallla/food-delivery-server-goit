const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Products', require: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  text: String,
  mark: Number,
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;
