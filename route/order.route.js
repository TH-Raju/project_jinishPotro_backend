const express = require("express");
const orderController = require("../controller/order.controller");
const router = express.Router();

router.post("/create", orderController.createOrder);
router.get("/", orderController.getOrders);
router.delete("/:id", orderController.deleteOrder);
router.patch("/update/:id", orderController.updateOrder);
module.exports = router;
