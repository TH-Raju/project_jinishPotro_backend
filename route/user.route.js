const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get("/user", userController.getUser);
router.get("/user/:id", userController.getUserById);
router.post("/signup", userController.signUp);
router.post("/login", userController.loginUser);
router.put("/user/update/admin/:id", userController.updateToAdmin);
router.put("/user/update/to/user/:id", userController.updateToUser);
router.delete("/user/delete/:id", userController.deleteSingleUser);

module.exports = router;
