import { CustomError } from "../../../errors/CustomError";
import { prismaClient } from "../../../prismaClient";

interface IPet {
  name: string;
  age: string;
  weight: string;
  color: string;
  breed: string;
  available?: boolean;
}

interface IUpdateUser {
  name: string;
  email: string;
}

class PetService {
  // async list() {
  //   const pets = await prismaClient.pet.findMany();

  //   return pets;
  // }

  async create({ name, age, weight, color, breed }: IPet) {
    const pet = await prismaClient.pet.create({
      data: {
        name,
        age,
        weight,
        color,
        breed,
        available: true,
      },
    });

    return pet;
  }

  // async update(id: string, { name, email }: IUpdateUser) {
  //   const userExists = await prismaClient.user.findUnique({
  //     where: { id },
  //   });

  //   if (!userExists) {
  //     throw new AppError("User not found!");
  //   }

  //   const user = await prismaClient.user.update({
  //     where: { id },
  //     data: { name, email },
  //   });

  //   return user;
  // }

  // async delete(id: string) {
  //   const userExists = await prismaClient.user.findUnique({
  //     where: { id },
  //   });

  //   if (!userExists) {
  //     throw new AppError("User not found!");
  //   }

  //   await prismaClient.user.delete({
  //     where: { id },
  //   });

  //   return { message: "Deleted user successfully!" };
  // }
}

export { PetService };
