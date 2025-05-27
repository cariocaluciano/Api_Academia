import express from 'express';
import { getMensagem } from '../controllers/firebaseController.js';

const router = express.Router();

router.get('/mensagem', getMensagem);

export const firebaseRoutes = router