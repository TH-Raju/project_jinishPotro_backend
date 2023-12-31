const User = require("../models/User");
const userService = require("../service/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

const maxTime = 7 * 24 * 60 * 60;

const createToken = (params, secret, expiresIn = null) => {
  return jwt.sign({ ...params }, secret, {
    expiresIn: expiresIn ?? maxTime,
  });
};

let getUser = async function (req, res) {
  const result = await userService.getUserService();
  // console.log(result);
  if (result) {
    let data = {
      success: true,
      status: 200,
      data: result,
    };
    res.send(data);
  }
};

let getUserById = async function (req, res) {
  const id = req.params.id;
  try {
    const result = await userService.getUserById(id);
    // console.log(result);
    if (result) {
      let data = {
        success: true,
        status: 200,
        data: result,
      };
      res.send(data);
    } else {
      let data = {
        success: false,
        status: 404,
        data: {},
      };
      res.send(data);
    }
  } catch (error) {
    console.log("Error Fetching get user by Id", error);
  }
};

let signUp = async function (req, res) {
  try {
    let newUser = await userService.createUserService(req.body);
    // let phone = newUser.phone;
    delete newUser.password;
    // let SecureUser = await User.findOne({ phone: phone }).select("-password");
    if (newUser) {
      const userJwtData = {
        name: newUser.name,
        role: newUser.role,
        email: newUser.email,
        id: newUser._id,
      };
      const accessToken = createToken(userJwtData, config.access_secret, "7d");

      // console.log("ac", accessToken);
      const tempUser = {
        ...newUser.toJSON(),
        accessToken: accessToken,
      };

      let data = {
        success: true,
        status: 200,
        data: tempUser,
      };

      res.send(data);
    }
  } catch (err) {
    console.log(err);
  }
};

let loginUser = async function (req, res) {
  // console.log(req.body);
  try {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({ email: email });
    let SecureUser = await User.findOne({ email: email }).select("-password");

    // console.log(SecureUser);

    if (user) {
      const userJwtData = {
        name: user.name,
        role: user.role,
        email: user.email,
        id: user._id,
      };
      let auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const accessToken = createToken(
          userJwtData,
          config.access_secret,
          "7d"
        );

        // console.log("ac", accessToken);
        const tempUser = {
          ...SecureUser.toJSON(),
          accessToken: accessToken,
        };
        let data = {
          success: true,
          message: "Login Successful",
          status: 200,
          data: tempUser,
        };
        res.send(data);
      } else {
        let data = {
          success: false,
          message: "Incorrect Password",
          status: 400,
        };
        res.send(data);
      }
    } else {
      res.status().send(400, "User Not Exist");
    }
  } catch (err) {
    console.log(err);
  }
};

async function updateToAdmin(req, res) {
  try {
    const id = req.params.id;

    const users = await userService.updateToAdminService(id);
    let data = {
      success: true,
      message: "Successful",
      status: 200,
      data: users,
    };
    res.send(data);
  } catch (error) {
    let data = {
      success: false,
      message: "Unsuccessful",
      status: 400,
      data: {},
    };
    res.send(data);
  }
}

async function updateToUser(req, res) {
  try {
    const id = req.params.id;

    const users = await userService.updateToUserService(id);
    let data = {
      success: true,
      message: "Successful",
      status: 200,
      data: users,
    };
    res.send(data);
  } catch (error) {
    let data = {
      success: false,
      message: "Unsuccessful",
      status: 400,
      data: {},
    };
    res.send(data);
  }
}

async function deleteSingleUser(req, res) {
  try {
    const id = req.params.id;
    const users = await userService.deleteSingleUserService(id);
    let data = {
      success: true,
      message: "Successfully Delete",
      status: 200,
      data: users,
    };
    res.send(data);
  } catch (error) {
    let data = {
      success: false,
      message: "Unsuccessful",
      status: 400,
      data: {},
    };
    res.send(data);
  }
}

const userController = {
  getUser,
  getUserById,
  signUp,
  loginUser,
  updateToAdmin,
  updateToUser,
  deleteSingleUser,
};

module.exports = userController;
