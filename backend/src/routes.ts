import { Request, Response, Router } from "express";
import { petRoutes } from "./modules/pet/routes/pet.routes";
import { sessionRoutes } from "./modules/user/routes/session.routes";
import { userRoutes } from "./modules/user/routes/user.routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).json("Bem vindo e adote um pet");
});

routes.use(userRoutes);
routes.use(sessionRoutes);
routes.use(petRoutes);

export { routes };
