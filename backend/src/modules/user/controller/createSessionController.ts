import { Request, Response } from "express";
import { CreateSessionService } from "../service/createSessionService";

class CreateSessioncController {
  async session(req: Request, res: Response) {
    const { email, password } = req.body;
    const createSessionService = new CreateSessionService();
    const session = await createSessionService.session({
      email,
      password,
    });

    return res.status(201).json(session);
  }
}

export { CreateSessioncController };
