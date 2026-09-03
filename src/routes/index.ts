import { Router } from "express"; 
import authRoutes from './auth.routes';
import clienteRoutes from './cliente.routes';
import obraRoutes from './obra.routes';
import emprestimoRoutes from './emprestimo.routes';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/clientes', clienteRoutes);
routes.use('/obras', obraRoutes);
routes.use('/emprestimo', emprestimoRoutes);

export {routes};
