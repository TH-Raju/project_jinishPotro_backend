let mongoose = require("mongoose");
let Schema = mongoose.Schema;

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
  products: [],
});

let Categoriy = mongoose.model("categoriy", categoriySchema);
module.exports = Categoriy;
