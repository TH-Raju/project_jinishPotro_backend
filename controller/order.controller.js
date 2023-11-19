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

const deleteOrder = async function (req, res) {
  const orderId = req.params.id;
  // console.log(orderId);
  const result = await orderService.deleteOrder(orderId);
  res.send(result);
};
async function updateOrder(req, res) {
  let datas = req.body;
  let id = req.params.id;
  // console.log(id);
  let orderUpdate = await orderService.updateOrder(id, datas);
  // console.log(" data ", orderUpdate);
  let data = {
    success: true,
    status: 200,
    data: orderUpdate,
  };

  res.send(data);
}

const orderController = {
  createOrder,
  getOrders,
  deleteOrder,
  updateOrder,
};

module.exports = orderController;
