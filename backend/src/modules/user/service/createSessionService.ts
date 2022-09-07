import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";
import auth from "../auth";
import { prismaClient } from "../../../prismaClient";
import { CustomError } from "../../../errors/CustomError";

interface ILogin {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionService {
  async session({ email, password }: ILogin): Promise<IResponse> {
    const user = await prismaClient.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new CustomError("Incorrect email/password combination", 401);
    }

    const passwordConfirmation = await bcrypt.compare(password, user.password);

    if (!passwordConfirmation) {
      throw new CustomError("Incorrect email/password combination", 401);
    }

    const token = sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { CreateSessionService };
