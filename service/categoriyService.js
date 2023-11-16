const Categoriy = require("../models/Categoriy");
const { ObjectId } = require("mongoose").Types;
let getCategoriy = async function () {
  const result = await Categoriy.find();
  return result;
};
let getCategoriyById = async function (categoriyId) {
  const result = await Categoriy.findOne({ _id: categoriyId });
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

let getProductById = async function (categoryId, productId) {
  try {
    const result = await Categoriy.findOne({ _id: categoryId });

    if (!result) {
      console.log("Category not found");
      return null;
    }

    // Convert the productId to ObjectId
    const targetProductId = new ObjectId(productId);

    const foundProduct = result.products.find((product) =>
      product._id.equals(targetProductId)
    );

    if (!foundProduct) {
      console.log("Product not found in the category");
      return null;
    }

    console.log("Found product:", foundProduct);
    return foundProduct;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
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
  getCategoriyById,
  postCategoriy,
  putProduct,
  getProductById,
  deleteCategoriy,
  deleteProduct,
  deleteReview,
  putReview,
};

module.exports = categoriyService;
