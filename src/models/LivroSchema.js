import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: String },
    cdd: { type: String, required: true },
    categoriaNome: { type: String },
    corSugerida: { type: String },
    lido: { type: Boolean, default: false },
    resumoPessoal: { type: String, default: "" },
    nota: { type: Number, min: 0, max: 5, default: 0 },
    dataAdicionado: { type: Date, default: Date.now }
});

export default mongoose.model('Livro', livroSchema);