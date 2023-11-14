let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const productSchema = new Schema({
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
  discount: {
    type: Number,
  },
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
