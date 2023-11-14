const express = require("express");
const categoriyController = require("../controller/categoriy.controller");
const router = express.Router();

router.post("/", categoriyController.postCategoriy);
router.put("/product", categoriyController.putProduct);

module.exports = router;
