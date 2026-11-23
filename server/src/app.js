import express from 'express';
import cors from 'cors';
import messageRoutes from './routes/messageRoutes.js';
import { errorHandler } from './middlewares/ErrorHandler.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor funcionando' });
});

app.use('/api/messages', messageRoutes);
app.use(errorHandler);

export default app;