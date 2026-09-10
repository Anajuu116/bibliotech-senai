import { Router } from 'express';
import * as exemplarController from '../controllers/exemplar.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', exemplarController.listar); // PÚBLICA — catálogo
router.get('/:id', exemplarController.buscarPorId); // PÚBLICA — catálogo
router.post('/', authMiddleware, exemplarController.criar); // PROTEGIDA

export default router;