const { Router } = require("express");
const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json("Welcome");
});

module.exports = { routes };
