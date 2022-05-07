import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

interface IUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string
}

export class UserContreller {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
      address,
      phone,
    } = req.body;

    const emailExists = await prismaClient.user.findUnique({
      where: { email }
    })

    if (emailExists) {
      return res.status(404).json({ Error: 'User already exists!'})
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
        address,
        phone,
      }
    })

    return res.status(201).json(user)
  }
}