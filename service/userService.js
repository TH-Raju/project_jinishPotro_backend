const User = require("../models/User");

let getUserService = async function (req, res) {
  const result = await User.find();
  return result;
};

let createUserService = async function (data) {
  let result = await User.create(data);
  return result;
};
const userService = {
  getUserService,
  createUserService,
};

module.exports = userService;
