const orderService = require("../service/OrderService");

let createOrder = async function (req, res) {
  try {
    let newOrder = await orderService.createOrderService(req.body);
    if (newOrder) {
      let data = {
        success: true,
        status: 200,
        data: newOrder,
      };

      res.send(data);
    }
  } catch (err) {
    console.log(err);
  }
};

let getOrders = async function (req, res) {
  const result = await orderService.getOrderService();
  //   console.log(result);
  if (result) {
    let data = {
      success: true,
      status: 200,
      data: result,
    };
    res.send(data);
  }
};

const orderController = {
  createOrder,
  getOrders,
};

module.exports = orderController;
