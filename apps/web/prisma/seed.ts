import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const password = await hash("demo1234", 12)
  const user = await prisma.user.upsert({
    where: { email: "demo@marinhomich.dev" },
    update: {},
    create: {
      email: "demo@marinhomich.dev",
      name: "Usuário Demo",
      password,
      docs: {
        create: [
          {
            title: "Follow Prisma on Twitter",
            content: "https://twitter.com/prisma",
            published: true,
          },
          {
            title: "Follow Nexus on Twitter",
            content: "https://twitter.com/nexusgql",
            published: true,
          },
        ],
      },
    },
  })
  console.log({ user })
}
main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
