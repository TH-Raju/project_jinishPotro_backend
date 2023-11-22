const User = require("../models/User");

let getUserService = async function (req, res) {
  const result = await User.find();
  return result;
};

let getUserById = async function (userId) {
  const result = await User.find({ _id: userId });
  return result;
};

let createUserService = async function (data) {
  let result = await User.create(data);
  return result;
};
const userService = {
  getUserService,
  getUserById,
  createUserService,
};

module.exports = userService;
