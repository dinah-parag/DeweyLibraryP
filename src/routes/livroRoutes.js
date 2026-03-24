import express from 'express';
import { 
    buscarLivroExterno, 
    adicionarLivro, 
    listarLivros,
    listarPorCategoria, // <- adicionar aqui
    atualizarLivro, 
    removerLivro 
} from '../controllers/livroController.js';


const routes = express.Router();

routes.get('/buscar', buscarLivroExterno);

export default routes;

routes.post('/livros', adicionarLivro);
routes.get('/livros', listarLivros);
routes.patch('/livros/:id', atualizarLivro);
routes.delete('/livros/:id', removerLivro);