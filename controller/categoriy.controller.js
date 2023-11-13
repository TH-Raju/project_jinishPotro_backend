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

const categoriyController = {
  postCategoriy,
};

module.exports = categoriyController;
