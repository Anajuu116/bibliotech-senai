import 'express-async-errors'
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (_req, res) => {
    res.json({mensagem: 'API Bibliotech está funcionando!'});
});

app.use(errorHandler)
export {app};