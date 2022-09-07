import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { CustomError } from "../errors/CustomError";
import auth from "../modules/user/auth";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    throw new CustomError("JWT token is missing.");
  }

  // Bearer asdfgsdkfjgçsdfljh
  const token = authHeader.split(" ")[1]; // pega o position 1

  const decoded = verify(token, auth.jwt.secret);

  if (!decoded) {
    throw new CustomError("Invalid JWT token!");
  }

  const { sub } = decoded as ITokenPayload;

  req.user = {
    id: sub,
  };

  return next();
};

export { isAuthenticated };
