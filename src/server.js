import express from 'express';
import routes from './routes/livroRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Usar as rotas definidas em livroRoutes.js
app.use(routes);

app.get('/', (req, res) => {
    res.status(200).send('API da Biblioteca Dewey Rodando e pronta para buscas!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});