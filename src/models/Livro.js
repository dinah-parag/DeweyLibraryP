// Estrutura por Livro
export class Livro {
    constructor(id, titulo, autor, ano, cdd, categoriaDewey, lido = false, resumoPessoal = "", nota = 0) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.cdd = cdd; // CDD
        this.categoriaDewey = categoriaDewey;
        this.lido = lido;
        this.resumoPessoal = resumoPessoal;
        this.nota = nota;
    }
}