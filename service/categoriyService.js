const Categoriy = require("../models/Categoriy");

let postCategoriy = async function (data) {
  const result = await Categoriy.create(data);
  return result;
};

let putProduct = async function (data) {
  // const result = await Categoriy.create(data);
  // console.log("service ", data);
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
const deleteCategoriy = async function (categoriyId) {
  const result = await Categoriy.deleteOne({ _id: categoriyId });
  return result;
};

let deleteProduct = async function (categoryId, productId) {
  const filter = { _id: categoryId };
  const update = { $pull: { products: { _id: productId } } };

  const result = await Categoriy.updateOne(filter, update);

  return result;
};

const categoriyService = {
  postCategoriy,
  putProduct,
  deleteCategoriy,
  deleteProduct,
};

module.exports = categoriyService;
