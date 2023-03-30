const express = require("express");
const Menu = require("../models/Menu");

const Router = express.Router();

Router.get("/all", async (request, response) => {
  const parentMenus = await Menu.find({});
  response.status(200).send(parentMenus);
});

Router.post("/add", async (request, response) => {
  const body = request.body;
  console.log(body);
  const newMenu = new Menu(body);
  const result = newMenu.save();
  response.status(200).send({ data: result });
});

module.exports = Router;
