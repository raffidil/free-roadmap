import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.create({
    data: {
      name: "Javascript",
      description: "",
      lessons: {
        create: {
          name: "Intro",
          description: "",
        },
      },
    },
  });
  console.log(course);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
