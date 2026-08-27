import { Router } from "express"; 
import authRoutes from './auth.routes';
import clienteRoutes from './cliente.routes';
import obraRoutes from './obra.routes';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/clientes', clienteRoutes);
routes.use('/veiculos', obraRoutes);


export {routes};
