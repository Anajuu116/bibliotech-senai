import { prisma } from '../config/prisma';
import { AppError } from '../middlewares/error.middleware';

interface CriarObraInput {
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  genero: string;
}

interface AtualizarObraInput {
  titulo?: string;
  isbn?: string;
  autor?: string;
  editora?: string;
  genero?: string;
  statusDisponibilidade?: string
}

export async function criarObra(dados: CriarObraInput) {
  const obra = await prisma.obra.create({
    data: dados,
  });

  return obra;
}

export async function listarObras() {
  return prisma.obra.findMany({
    orderBy: { id: 'asc' },
  });
}

export async function buscarObraPorId(id: number) {
  const obra = await prisma.obra.findUnique({
    where: { id },
    include: { exemplares: true },
  });

  if (!obra) {
    throw new AppError('Obra não encontrada.', 404);
  }

  return obra;
}

export async function atualizarObra(id: number, dados: AtualizarObraInput) {
  await buscarObraPorId(id);

  return prisma.obra.update({
    where: { id },
    data: dados,
    include: { obra: true },
    
  });
}