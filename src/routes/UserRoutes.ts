import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { UserContreller } from '../controllers/UserController'

const userRoutes = Router()
const userController = new UserContreller()

userRoutes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  })
}), userController.create)

export { userRoutes }