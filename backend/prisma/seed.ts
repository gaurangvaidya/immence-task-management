import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();

  await prisma.category.upsert({
    where: { id: 1, name: 'Developement' },
    update: {},
    create: {
      id: 1,
      name: 'Development',
    },
  });
  await prisma.category.upsert({
    where: { id: 2, name: 'Testing' },
    update: {},
    create: {
      id: 2,
      name: 'Testing',
    },
  });
  await prisma.category.upsert({
    where: { id: 3, name: 'Research' },
    update: {},
    create: { id: 3, name: 'Research' },
  });
  await prisma.category.upsert({
    where: { id: 4, name: 'Meeting' },
    update: {},
    create: { id: 4, name: 'Meeting' },
  });
}

main();
