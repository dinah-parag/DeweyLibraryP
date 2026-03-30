import express from 'express';
import { 
    buscarLivroExterno,
    adicionarLivro,
    adicionarLivroManual,
    listarLivros,
    listarPorCategoria,
    atualizarLivro,
    removerLivro
} from '../controllers/livroController.js';


const routes = express.Router();

routes.get('/buscar', buscarLivroExterno);
routes.post('/livros', adicionarLivro);
routes.post('/livros/manual', adicionarLivroManual);
routes.get('/livros/categoria/:codigo', listarPorCategoria);
routes.get('/livros', listarLivros);
routes.patch('/livros/:id', atualizarLivro);
routes.delete('/livros/:id', removerLivro);

export default routes;