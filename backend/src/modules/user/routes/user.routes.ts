import { Router } from "express";
import { errors } from "celebrate";
import { UserController } from "../controller/UserController";
import { createUserJoi } from "../../../middlewares/UserJoi";
import { isAuthenticated } from "../../../middlewares/isAuthenticated";

const userRoutes = Router();
const userController = new UserController();

userRoutes.get("/users", isAuthenticated, userController.list);
userRoutes.post("/users", createUserJoi, userController.create);
// userRoutes.put("/users/:id", updateUserJoi, userController.update);
// userRoutes.delete("/users/:id", userController.delete);

userRoutes.use(errors());

export { userRoutes };
