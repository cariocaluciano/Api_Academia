import express from 'express';
import { config } from 'dotenv';
import { firebaseRoutes } from './src/routes/firebaseRoutes.js';

config();

const app = express();
app.use(express.json());
app.use('/', firebaseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});