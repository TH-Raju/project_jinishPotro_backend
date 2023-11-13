const Categoriy = require("../models/Categoriy");

let postCategoriy = async function (data) {
  const result = await Categoriy.create(data);
  return result;
};

const categoriyService = {
  postCategoriy,
};

module.exports = categoriyService;
