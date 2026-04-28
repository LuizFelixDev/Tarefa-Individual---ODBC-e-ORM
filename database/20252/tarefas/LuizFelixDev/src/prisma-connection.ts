import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.atividade.create({
        data: {
            descricao: 'Revisão de código por pares',
            projeto_id: 1
        }
    });

    await prisma.projeto.update({
        where: { id: 1 },
        data: { lider_id: 3 }
    });

    const projetosComAtividades = await prisma.projeto.findMany({
        include: {
            atividades: true
        }
    });

    console.dir(projetosComAtividades, { depth: null });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());