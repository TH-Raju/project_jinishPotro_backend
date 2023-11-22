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

function updateToAdminService(id, datas) {
  var filter = { _id: id };
  var options = { upsert: true };
  var updatedDoc = {
    $set: {
      role: "admin",
    },
  };

  return User.findOneAndUpdate(filter, updatedDoc, options).select("-password");
}

function updateToUserService(id, datas) {
  var filter = { _id: id };
  var options = { upsert: true };
  var updatedDoc = {
    $set: {
      role: "buyer",
    },
  };

  return User.findOneAndUpdate(filter, updatedDoc, options).select("-password");
}

function deleteSingleUserService(id) {
  return User.deleteOne({
    _id: id,
  });
}

const userService = {
  getUserService,
  getUserById,
  createUserService,
  updateToAdminService,
  updateToUserService,
  deleteSingleUserService,
};

module.exports = userService;
