import * as prismaPkg from '@prisma/client'
import pkg from '@prisma/client'

const prismaConstructor = prismaPkg?.PrismaClient ?? pkg.PrismaClient
export default new prismaConstructor()
