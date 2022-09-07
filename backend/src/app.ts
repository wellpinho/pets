require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { routes } from "./routes";
import { CustomError } from "./errors/CustomError";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  return res.status(200).json("Bem vindo ao Grupo A Educação.");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      status: "Error",
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
});

export { app };
