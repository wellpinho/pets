const { celebrate, Joi, Segments } = require("celebrate");

const createPetJoi = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.string().required(),
    weight: Joi.string().required(),
    color: Joi.string().required(),
    breed: Joi.string().required(),
  }),
});

export { createPetJoi };
