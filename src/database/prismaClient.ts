// camada de conexão com banco de dados
import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export { prismaClient }