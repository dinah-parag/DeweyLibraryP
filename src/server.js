import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/livroRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(routes);

async function conectarBanco() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Conectado ao MongoDB com sucesso!");
    } catch (erro) {
        console.error("❌ Erro ao conectar ao MongoDB:", erro.message);
    }
}

conectarBanco();

app.get('/', (req, res) => {
    res.status(200).send('API da Biblioteca Dewey com MongoDB Conectado!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});