const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get("/user", userController.getUser);
router.get("/user/:id", userController.getUserById);
router.post("/signup", userController.signUp);
router.post("/login", userController.loginUser);

module.exports = router;
