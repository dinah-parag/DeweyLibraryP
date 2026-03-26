import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/livroRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.static(join(__dirname, '../public')));

// Rota que entrega a senha ao frontends
app.get('/config', (req, res) => {
    res.json({ senha: process.env.SENHA_ADMIN });
});

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

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});