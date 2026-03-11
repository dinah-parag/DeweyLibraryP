import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para permitir que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Simulação de banco de dados (Baseado na CDD)
let livros = [
    { id: 1, titulo: "Express para Iniciantes", autor: "Dev Silva", cdd: "005.1", categoria: "Programação" },
    { id: 2, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", cdd: "823", categoria: "Literatura Inglesa" }
];

// Teste
app.get('/', (req, res) => {
    res.status(200).send('API da Biblioteca Dewey Rodando!');
});

// Rota para listar todos os livros
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});