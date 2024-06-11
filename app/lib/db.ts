import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export const db = prisma;


export const getUserByEmail = async (email: string ) => {
  try {
    const user = await db.user.findUnique({where: { email }})

    return user
  } catch (error) {
    return null;
  }
}


export const getUserById = async(id: number) => {
  try {
  const user = await db.user.findUnique({where: {id}})

    return user;
  } catch (error) {
    return null;
  }
}