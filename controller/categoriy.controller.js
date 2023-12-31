const categoriyService = require("../service/categoriyService");

const getCategoriy = async function (req, res) {
  const result = await categoriyService.getCategoriy();
  if (result) {
    let data = {
      success: true,
      message: " Successfully Find",
      status: 200,
      data: result,
    };
    res.send(data);
  } else {
    let data = {
      success: true,
      message: " Not find any data",
      status: 400,
      data: {},
    };
    res.send(data);
  }
};
const getCategoriyById = async function (req, res) {
  const categoriyId = req.params.id;
  const result = await categoriyService.getCategoriyById(categoriyId);
  if (result) {
    let data = {
      success: true,
      message: " Successfully Find",
      status: 200,
      data: result,
    };
    res.send(data);
  } else {
    let data = {
      success: true,
      message: " Not find any data",
      status: 400,
      data: {},
    };
    res.send(data);
  }
};

const postCategoriy = async function (req, res) {
  const result = await categoriyService.postCategoriy(req.body);
  if (result) {
    let data = {
      success: true,
      message: " Successfully added",
      status: 200,
      data: result,
    };
    res.send(data);
  } else {
    let data = {
      success: true,
      message: " There has some issues",
      status: 400,
      data: {},
    };
    res.send(data);
  }
};

const putProduct = async function (req, res) {
  const result = await categoriyService.putProduct(req.body);
  // console.log(result);
  res.send(result);
};

const getProductById = async function (req, res) {
  const categoryId = req.params.categoryId;
  const productId = req.params.productId;

  const result = await categoriyService.getProductById(categoryId, productId);
  // console.log(result);
  if (result) {
    let data = {
      success: true,
      message: " Successfully Find",
      status: 200,
      data: result,
    };
    res.send(data);
  } else {
    let data = {
      success: true,
      message: " Not find any data",
      status: 400,
      data: {},
    };
    res.send(data);
  }
};

const putReview = async function (req, res) {
  const result = await categoriyService.putReview(req.body);
  // console.log(result);
  res.send(result);
};

const deleteCategoriy = async function (req, res) {
  const categoriyId = req.params.id;
  // console.log(categoriyId);
  const result = await categoriyService.deleteCategoriy(categoriyId);
  res.send(result);
};

const deleteProduct = async function (req, res) {
  const categoryId = req.params.categoryId;
  const productId = req.params.productId;
  const result = await categoriyService.deleteProduct(categoryId, productId);
  res.send(result);
};

const deleteReview = async function (req, res) {
  const categoryId = req.params.categoryId;
  const productId = req.params.productId;
  const reviewId = req.params.reviewId;
  const result = await categoriyService.deleteReview(
    categoryId,
    productId,
    reviewId
  );
  res.send(result);
};

const categoriyController = {
  getCategoriy,
  getCategoriyById,
  postCategoriy,
  putProduct,
  getProductById,
  putReview,
  deleteCategoriy,
  deleteProduct,
  deleteReview,
};

module.exports = categoriyController;
