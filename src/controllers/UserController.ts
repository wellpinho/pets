import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

import bcrypt from 'bcrypt';

interface IUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string
}

export class UserContreller {
  async list(req: Request, res: Response) {
    const users = await prismaClient.user.findMany();

    return res.status(200).json(users)
  }

  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
      address,
      phone,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 8)

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
        password: hashedPassword,
        address,
        phone,
      }
    })

    return res.status(201).json(user)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params

    const userExists = await prismaClient.user.findUnique({
      where: { id }
    })

    if (!userExists) {
      return res.status(404).json({Error: 'User not found'})
    }

    const {
      name, 
      email, 
      password, 
      address, 
      phone,
    } = req.body

    const hashedPassword = await bcrypt.hash(password, 8)

    const user = await prismaClient.user.update({
      where: { id },
      data: {
        name,
        email,
        password: hashedPassword,
        address,
        phone,
      }
    })

    return res.status(201).json({ 
      Message: `Use ${user.name}, it has been updated`
    })
  }
}