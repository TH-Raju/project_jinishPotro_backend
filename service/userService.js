const User = require("../models/User");

let getUserService = async function (req, res) {
  const result = await User.find();
  return result;
};

let getUserById = async function (id) {
  const result = await User.findById(id);
  return result;
};

let createUserService = async function (data) {
  let result = await User.create(data);
  return result;
};

async function updateToAdminService(id, datas) {
  let filter = { _id: id };
  let options = { upsert: true };
  let updatedDoc = {
    $set: {
      role: "admin",
    },
  };

  let result = await User.findOneAndUpdate(filter, updatedDoc, options).select(
    "-password"
  );
  return result;
}

async function updateToUserService(id, datas) {
  let filter = { _id: id };
  let options = { upsert: true };
  let updatedDoc = {
    $set: {
      role: "buyer",
    },
  };

  let result = await User.findOneAndUpdate(filter, updatedDoc, options).select(
    "-password"
  );
  return result;
}

async function deleteSingleUserService(id) {
  let result = await User.deleteOne({
    _id: id,
  });
  return result;
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
