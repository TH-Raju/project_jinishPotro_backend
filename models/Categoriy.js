let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: {
    type: String,
  },
  userId: {
    type: String,
  },
  comment: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
  },
  detail: {
    type: String,
  },
  sellerName: {
    type: String,
  },
  sellerId: {
    type: String,
  },
  photo: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  review: [reviewSchema],
});

let categoriySchema = new Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  detail: {
    type: String,
  },
  photo: {
    type: String,
  },
  products: [productSchema],
});

let Categoriy = mongoose.model("categoriy", categoriySchema);
module.exports = Categoriy;
