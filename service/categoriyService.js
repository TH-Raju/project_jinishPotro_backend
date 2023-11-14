const Categoriy = require("../models/Categoriy");

let postCategoriy = async function (data) {
  const result = await Categoriy.create(data);
  return result;
};

let putProduct = async function (data) {
  // const result = await Categoriy.create(data);
  console.log("service ", data);
  const id = data.categoriyId;
  const filter = { _id: id };
  const options = { upsert: true };

  const result = await Categoriy.updateOne(
    filter,
    { $push: { products: data } },
    options
  );

  return result;
};

const categoriyService = {
  postCategoriy,
  putProduct,
};

module.exports = categoriyService;
