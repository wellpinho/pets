const { Router } = require("express");
const { celebrate, Joi, errors, Segments } = require("celebrate");

const { UserController } = require("../controllers/userController");

const userRoutes = Router();
const userController = new UserController();

userRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      address: Joi.string().required(),
    }),
  }),
  userController.create
);

userRoutes.get("/checkuser", userController.checkUser);

userRoutes.post(
  "/login",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  userController.login
);

userRoutes.use(errors());

module.exports = userRoutes;
