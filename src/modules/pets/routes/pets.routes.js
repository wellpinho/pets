const { Router } = require("express");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const { checkToken } = require("../../../helpers/verifyToken");
const { imageUpload } = require("../../../helpers/upload");
const { PetsController } = require("../controllers/petsController");

const petsRoutes = Router();
const petController = new PetsController();

petsRoutes.post(
  "/",
  checkToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.string().required(),
      breed: Joi.string().required(),
      family: Joi.string().required(),
      weight: Joi.string().required(),
      available: Joi.bool().required(),
      color: Joi.string().required(),
    }),
  }),
  petController.create
);

petsRoutes.use(errors());

module.exports = petsRoutes;
