import { Router } from "express";
import { errors } from "celebrate";
import { isAuthenticated } from "../../../middlewares/isAuthenticated";
import { PetController } from "../controller/PetController";
import { createPetJoi } from "../../../middlewares/PetJoi";

const petRoutes = Router();
const petController = new PetController();

// petRoutes.get("/users", isAuthenticated, userController.list);
petRoutes.post("/pets", createPetJoi, petController.create);
// petRoutes.put("/users/:id", updateUserJoi, userController.update);
// petRoutes.delete("/users/:id", userController.delete);

petRoutes.use(errors());

export { petRoutes };
