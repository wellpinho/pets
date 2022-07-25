const { Router } = require("express");
const userRoutes = require("./modules/users/routes/user.routes");
const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome" });
});

routes.use("/users", userRoutes);

module.exports = routes;
