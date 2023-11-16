const express = require("express");
const categoriyController = require("../controller/categoriy.controller");
const router = express.Router();

router.get("/", categoriyController.getCategoriy);
router.get("/:id", categoriyController.getCategoriyById);
router.post("/", categoriyController.postCategoriy);
router.put("/product", categoriyController.putProduct);
router.get(
  "/:categoryId/product/:productId",
  categoriyController.getProductById
);
router.put("/product/review", categoriyController.putReview);
router.delete("/:id", categoriyController.deleteCategoriy);
router.delete(
  "/:categoryId/products/:productId",
  categoriyController.deleteProduct
);
router.delete(
  "/:categoryId/products/:productId/review/:reviewId",
  categoriyController.deleteReview
);

module.exports = router;
