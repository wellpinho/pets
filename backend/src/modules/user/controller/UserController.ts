import { Request, Response } from "express";
import { UserService } from "../service/UserService";

class UserController {
  async list(req: Request, res: Response) {
    const listUsers = new UserService();
    const users = await listUsers.list();

    return res.status(200).json(users);
  }

  async create(req: Request, res: Response) {
    const { name, email, password, phone } = req.body;
    const createUserService = new UserService();
    const user = await createUserService.create({
      name,
      email,
      password,
      phone,
      role: "user",
    });

    return res.status(201).json(user);
  }

  // async update(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const { name, email } = req.body;
  //   const updateUserService = new UserService();
  //   const user = await updateUserService.update(id, {
  //     name,
  //     email,
  //   });

  //   return res.status(201).json(user);
  // }

  // async delete(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const updateUserService = new UserService();
  //   const user = await updateUserService.delete(id);

  //   return res.status(200).json(user);
  // }
}

export { UserController };
