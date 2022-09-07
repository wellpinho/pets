import { CustomError } from "../../../errors/CustomError";
import { prismaClient } from "../../../prismaClient";
import bcrypt from "bcrypt";

interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}

interface IUpdateUser {
  name: string;
  email: string;
}

class UserService {
  // async list() {
  //   const users = await prismaClient.user.findMany();

  //   return users;
  // }

  async create({ name, email, password, phone, role }: IUser) {
    const userExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userExists) {
      throw new CustomError("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        role,
      },
      select: { name: true, email: true, phone: true },
    });

    return user;
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

export { UserService };
