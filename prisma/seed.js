const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const explorer1 = await prisma.mission.upsert({
      where: {name: 'Explorer 1'},
      update: {},
      create: {
        name: 'Explorer1',
        username: 'ajolonauta1',
        lang: 'python',
        missionCommander: 'Fer',
        enrollments: 1,
        hasCertification: false
      },
    });

    const explorer2 = await prisma.mission.upsert({
      where: {name: 'Explorer 2'},
      update: {},
      create: {
        name: 'Explorer2',
        username: 'ajolonauta2',
        lang: 'css',
        missionCommander: 'Rodrigo',
        enrollments: 2,
        hasCertification: true
      },
    });

    const explorer3 = await prisma.mission.upsert({
      where: {name: 'Explorer 3'},
      update: {},
      create: {
        name: 'Explorer3',
        username: 'ajolonauta3',
        lang: 'python, javascript',
        missionCommander: 'Carlo',
        enrollments: 2,
        hasCertification: true
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();