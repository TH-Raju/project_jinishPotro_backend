const Order = require("../models/Order");

let getOrderService = async function (req, res) {
  const result = await Order.find();
  return result;
};

let createOrderService = async function (data) {
  let result = await Order.create(data);
  return result;
};

const orderService = {
  createOrderService,
  getOrderService,
};

module.exports = orderService;
