import { errors } from "celebrate";
import { Router } from "express";
import { createSessionJoi } from "../../../middlewares/sessionJoi";
import { CreateSessioncController } from "../controller/createSessionController";

const sessionRoutes = Router();
const sessionController = new CreateSessioncController();

sessionRoutes.post("/users/login", createSessionJoi, sessionController.session);

sessionRoutes.use(errors());

export { sessionRoutes };
