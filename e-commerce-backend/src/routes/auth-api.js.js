const { request, response } = require("express");
const express = require("express");
const Users = require("../models/User");
const authApi = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserRole = require("../models/UserRole");

authApi.get("/", (request, response) => {
  response.status(200).json({
    data: [],
  });
});

//---- register ----
authApi.post("/register", async (request, response) => {
  const data = request.body;
  console.log(data);

  if (data) {
    const oldUser = await Users.findOne({ email: data.email });

    if (oldUser) {
      return response
        .status(200)
        .json({ data: "Та аль хэдийн бүртгэлтэй байна 🔴!!!" });
    }
    let hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    try {
      const user = await Users.create(data);
      const result = await user.populate("userrole");
      response.status(201).json({
        message: "Хэрэглэгч Амжилттай үүслээ",
        data: result,
      });
    } catch (error) {
      response.status(500).json({
        success: false,
        error: error,
      });
    }
  } else {
    return response.json({
      data: "Хэрэглэгч олдсонгүй 🔴",
    });
  }
});

//login
authApi.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!(email && password)) {
      response.status(400).json({
        message: "Утгуудыг бүрэн оруулна уу 🔴!!!",
      });
      return;
    }

    const user = await Users.findOne({ email });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (user && isMatch) {
        const token = jwt.sign(
          { user_id: user._id, email },
          "MySuperDuperPrivateKey",
          {
            expiresIn: "2h",
          }
        );
        return response.status(200).json({
          success: true,
          status: "Amjilttai newterlee",
          data: user,
          token: token,
        });
      } else {
        console.log("Neg ym");
      }
    } else {
      return response.status(400).json({
        success: false,
        status: "Нууц үг, нэр хоорондоо таарахгүй байна",
      });
    }
  } catch (error) {
    console.error("Aldaa garlaa", error);
  }
});

// Role vvsgedeg heseg
authApi.post("/role/create", async (request, response) => {
  const { name } = request.body;
  const result = await UserRole.create({ name });

  response.status(200).json({
    data: result,
  });
});

authApi.get("/role/list", async (request, response) => {
  const result = await UserRole.find({});
  response.status(200).json({
    data: result,
  });
});

module.exports = authApi;
