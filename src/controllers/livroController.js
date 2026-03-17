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

export const listarLivros = async (req, res) => {
    try {
        const livros = await Livro.find();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar livros no banco", erro: error.message });
    }
};

export const atualizarLivro = async (req, res) => {
    const { id } = req.params; 
    
    try {
        const livroAtualizado = await Livro.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!livroAtualizado) {
            return res.status(404).json({ mensagem: "Livro não encontrado." });
        }

        res.status(200).json({
            mensagem: "Livro atualizado com sucesso!",
            livro: livroAtualizado
        });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar livro", erro: error.message });
    }
};

export const removerLivro = async (req, res) => {
    const { id } = req.params;

    try {
        const livroRemovido = await Livro.findByIdAndDelete(id);

        if (!livroRemovido) {
            return res.status(404).json({ mensagem: "Livro não encontrado para remoção." });
        }

        res.status(200).json({
            mensagem: `O livro "${livroRemovido.titulo}" foi removido com sucesso!`
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao remover o livro", erro: error.message });
    }
};