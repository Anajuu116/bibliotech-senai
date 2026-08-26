import { prisma } from '../config/prisma';
import { AppError } from '../middlewares/error.middleware';

interface CriarObraImput{
    exemplarId: number;
    titulo: string;
    isbn: string;
    autor: string;
    editora: string;
    genero: string;
}

interface AtualizarObraInput{
    exemplarId?: number;
    titulo?: string;
    isbn?: string;
    autor?: string;
    editora?: string;
    genero?: string;
    statusDisponibilidade?: string;
}

export async function CriarObraImput(dados: CriarObraImput){
    const titulo = await prisma.obra.findUnique({
        where: {id: dados.exemplarId}
    })
    
}