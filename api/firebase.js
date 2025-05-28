import express from 'express';
import { config } from 'dotenv';
import { firebaseRoutes } from '../src/routes/firebaseRoutes.js';
import serverless from 'serverless-http'; // ← IMPORTANTE

config();

const app = express();
app.use(express.json());

// Rota base (ex: /mensagem)
app.use('/', firebaseRoutes);

// Transforma o app Express em handler compatível com Vercel
export default serverless(app);
