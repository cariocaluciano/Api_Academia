import express from 'express';
import { config } from 'dotenv';
import { firebaseRoutes } from '../src/routes/firebaseRoutes.js';

config();

const app = express();
app.use(express.json());

// Para acessar: /api/firebase/mensagem
app.use('/', firebaseRoutes);

export default function handler(req, res) {
  return app(req, res);
}