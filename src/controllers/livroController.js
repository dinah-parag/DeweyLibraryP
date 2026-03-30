import Livro from '../models/LivroSchema.js';
import axios from 'axios';
import { identificarCategoria, buscarCategoriaPorCodigo } from '../utils/mapeadorDewey.js';

export const buscarLivroExterno = async (req, res) => {
    const { titulo } = req.query;
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${titulo}`);
        const dados = response.data.items[0].volumeInfo;
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
        const novoLivro = new Livro(req.body);
        const livroSalvo = await novoLivro.save();
        res.status(201).json({ mensagem: "Livro adicionado com sucesso!", livro: livroSalvo });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao salvar o livro", erro: error.message });
    }
};

// Função para cadastro manual
export const adicionarLivroManual = async (req, res) => {
    try {
        const { titulo, autor, ano, cdd } = req.body;

        if (!titulo || !cdd) {
            return res.status(400).json({ mensagem: "Título e código CDD são obrigatórios." });
        }

        const infoCategoria = buscarCategoriaPorCodigo(cdd);

        const novoLivro = new Livro({
            titulo,
            autor: autor || "Autor não informado",
            ano: ano || "N/A",
            cdd,
            categoriaNome: infoCategoria.nome,
            corSugerida: infoCategoria.cor,
            lido: false,
            resumoPessoal: "",
            nota: 0
        });

        const livroSalvo = await novoLivro.save();
        res.status(201).json({ mensagem: "Livro adicionado manualmente!", livro: livroSalvo });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao salvar o livro", erro: error.message });
    }
};

export const listarLivros = async (req, res) => {
    try {
        const { titulo, lido } = req.query;
        const filtro = {};
        if (titulo) filtro.titulo = { $regex: titulo, $options: 'i' };
        if (lido !== undefined) filtro.lido = lido === 'true';
        const livros = await Livro.find(filtro);
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar livros", erro: error.message });
    }
};

export const listarPorCategoria = async (req, res) => {
    try {
        const { codigo } = req.params;
        const livros = await Livro.find({ cdd: { $regex: `^${codigo}`, $options: 'i' } });
        if (livros.length === 0) {
            return res.status(404).json({ mensagem: `Nenhum livro encontrado na categoria ${codigo}.` });
        }
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao filtrar por categoria", erro: error.message });
    }
};

export const atualizarLivro = async (req, res) => {
    const { id } = req.params;
    try {
        const livroAtualizado = await Livro.findByIdAndUpdate(id, req.body, { new: true });
        if (!livroAtualizado) return res.status(404).json({ mensagem: "Livro não encontrado." });
        res.status(200).json({ mensagem: "Livro atualizado!", livro: livroAtualizado });
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao atualizar livro", erro: error.message });
    }
};

export const removerLivro = async (req, res) => {
    const { id } = req.params;
    try {
        const livroRemovido = await Livro.findByIdAndDelete(id);
        if (!livroRemovido) return res.status(404).json({ mensagem: "Livro não encontrado." });
        res.status(200).json({ mensagem: `"${livroRemovido.titulo}" removido com sucesso!` });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao remover livro", erro: error.message });
    }
};