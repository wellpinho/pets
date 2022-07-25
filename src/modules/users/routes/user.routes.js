const { Router } = require("express");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const { UserController } = require("../controllers/userController");
const { Login } = require("../controllers/login");
const { checkToken } = require("../../../helpers/verifyToken");
const { imageUpload } = require("../../../helpers/upload");

const userRoutes = Router();
const userController = new UserController();
const loginUser = new Login();

userRoutes.get(
  "/:id",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  userController.show
);

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

userRoutes.get("/checkuser", loginUser.checkUser);

userRoutes.post(
  "/login",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  loginUser.login
);

userRoutes.put(
  "/edit/:id",
  checkToken,
  imageUpload.single("image"),
  userController.update
);

userRoutes.use(errors());

module.exports = userRoutes;
