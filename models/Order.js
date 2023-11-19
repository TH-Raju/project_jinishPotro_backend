let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let orderSchema = new Schema(
  {
    categoryId: {
      type: String,
    },
    productId: {
      type: String,
    },
    productName: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    userEmail: {
      type: String,
    },
    userPhone: {
      type: String,
    },
    totalPrice: {
      type: Number,
    },
    sendMoney: {
      type: Number,
    },
    transaction: {
      type: String,
    }
  },
  { timestamps: true }
);



let Order = mongoose.model("order", orderSchema);
module.exports = Order;