const categoriyService = require("../service/categoriyService");

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
  postCategoriy,
  putProduct,
  putReview,
  deleteCategoriy,
  deleteProduct,
  deleteReview,
};

module.exports = categoriyController;
