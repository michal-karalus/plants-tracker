import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.plot.deleteMany();
  await prisma.plant.deleteMany();

  await prisma.plot.createMany({
    data: [
      { name: 'Garden Plot', id: 1 },
      { name: 'Another Plot', id: 2 },
    ],
  });

  await prisma.plant.createMany({
    data: [
      { plotId: 1, positionX: 250, positionY: 200 },
      { plotId: 1, positionX: 550, positionY: 100 },
    ],
  });
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
