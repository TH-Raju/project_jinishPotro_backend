const Categoriy = require("../models/Categoriy");

let getCategoriy = async function () {
  const result = await Categoriy.find();
  return result;
};

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

let putReview = async function (data) {
  // const result = await Categoriy.create(data);
  // console.log("service ", data);
  const id = data.categoriyId;
  const productId = data.productId;
  const reviewData = data.reviewData;
  const filter = { _id: id, "products._id": productId };
  const options = { upsert: true };

  const result = await Categoriy.updateOne(
    filter,
    { $push: { "products.$.review": reviewData } },
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

let deleteReview = async function (categoryId, productId, reviewId) {
  const filter = { _id: categoryId, "products._id": productId };
  const update = { $pull: { "products.$.review": { _id: reviewId } } };

  // console.log(filter);
  const result = await Categoriy.updateOne(filter, update);

  return result;
};

const categoriyService = {
  getCategoriy,
  postCategoriy,
  putProduct,
  deleteCategoriy,
  deleteProduct,
  deleteReview,
  putReview,
};

module.exports = categoriyService;
