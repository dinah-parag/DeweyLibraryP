import axios from 'axios';
import { identificarCategoria } from '../utils/mapeadorDewey.js';
import Livro from '../models/LivroSchema.js';

export const buscarLivroExterno = async (req, res) => {
    const { titulo } = req.query; // Pega o título enviado na URL

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${titulo}`);
        const dados = response.data.items[0].volumeInfo; // Pega o primeiro resultado

        // Descobrindo o CCD e a Cor
        const infoDewey = identificarCategoria(dados.categories ? dados.categories[0] : "");

        const novoLivro = {
            titulo: dados.title,
            autor: dados.authors ? dados.authors[0] : "Autor Desconhecido",
            ano: dados.publishedDate ? dados.publishedDate.split('-')[0] : "N/A",
            cdd: infoDewey.codigo,
            categoriaNome: infoDewey.nome,
            corSugerida: infoDewey.cor, 
            resumo: dados.description || "Sem resumo disponível.",
            status: "Não lido",
            nota: 0
        };

        res.status(200).json(novoLivro);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar livro", erro: error.message });
    }
};

export const adicionarLivro = async (req, res) => {
    try {
        // O req.body contém as informações que vamos enviar
        const novoLivro = new Livro(req.body);
        
        // O .save() é o comando mágico do Mongoose que grava no Atlas
        const livroSalvo = await novoLivro.save();
        
        res.status(201).json({
            mensagem: "Livro adicionado com sucesso à sua biblioteca!",
            livro: livroSalvo
        });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao salvar o livro", erro: error.message });
    }
};