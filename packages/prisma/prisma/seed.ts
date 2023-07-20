import { PrismaClient } from "@prisma/client";

import { stackingData } from "../data";

const prisma = new PrismaClient();
async function main() {
  const allData = stackingData.map((d) => {
    return prisma.staking.create({
      data: d,
    });
  });

  await Promise.all(allData);
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