import express from 'express';
import { buscarLivroExterno } from '../controllers/livroController.js';

const routes = express.Router();

// Pega pedidos do tipo GET no endereço /buscar
routes.get('/buscar', buscarLivroExterno);

export default routes;