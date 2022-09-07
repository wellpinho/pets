const { celebrate, Joi, Segments } = require("celebrate");

const createSessionJoi = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

export { createSessionJoi };
