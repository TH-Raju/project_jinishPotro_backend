const express = require("express");
const categoriyController = require("../controller/categoriy.controller");
const router = express.Router();

router.post("/", categoriyController.postCategoriy);
router.put("/product", categoriyController.putProduct);
router.delete('/:categoryId/products/:productId', categoriyController.deleteProduct)

module.exports = router;
