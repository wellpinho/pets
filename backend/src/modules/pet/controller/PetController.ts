import { Request, Response } from "express";
import { PetService } from "../service/PetService";

class PetController {
  // async list(req: Request, res: Response) {
  //   const listUsers = new UserService();
  //   const users = await listUsers.list();

  //   return res.status(200).json(users);
  // }

  async create(req: Request, res: Response) {
    const { name, age, weight, color, breed } = req.body;
    const createPetService = new PetService();
    const pet = await createPetService.create({
      name,
      age,
      weight,
      color,
      breed,
    });

    return res.status(201).json(pet);
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

export { PetController };
