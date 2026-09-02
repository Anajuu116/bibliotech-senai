import { prisma } from '../config/prisma';
import { AppError } from '../middlewares/error.middleware';

interface CriarObraInput {
  exemplarId: number;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  genero: string;
  estadoDeConservacao: string;

}

interface AtualizarObraInput {
  titulo?: string;
  isbn?: string;
  autor?: string;
  editora?: string;
  genero?: string;
  statusDisponibilidade?: string;
  estadoDeConservacao: string;
}

export async function criarObra(dados: CriarObraInput) {
  const obra = await prisma.obra.create({
    data: dados,
  });

  return obra;
}

export async function listarObras() {
  return prisma.obra.findMany({
    orderBy: { obraId: 'asc' },
  });
}

export async function buscarObraPorId(obraId: number) {
  const obra = await prisma.obra.findUnique({
    where: { obraId },
    include: { exemplares: true },
  });

  if (!obra) {
    throw new AppError('Obra não encontrada.', 404);
  }

  return obra;
}

export async function atualizarObra(obraId: number, dados: AtualizarObraInput) {
  await buscarObraPorId(obraId);

  return prisma.obra.update({
    where: { obraId },
    data: dados,
    include: { exemplares: true },
  });
}