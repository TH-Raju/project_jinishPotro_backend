let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let orderSchema = new Schema(
  {
    categoryId: {
      type: String,
    },
    categoryName: {
      type: String,
    },
    productId: {
      type: String,
    },
    userId: {
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
    userName: {
      type: String,
    },
    userPhone: {
      type: String,
    },
    totalPrice: {
      type: Number,
    },
    sendMoney: {
      type: String,
    },
    transaction: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Cancel", "Confirm"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

let Order = mongoose.model("order", orderSchema);
module.exports = Order;
