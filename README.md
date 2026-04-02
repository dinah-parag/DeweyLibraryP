# Biblioteca Pessoal Dewey
  
Neste projeto temos como objetivo a criação de um banco de dados para armazenamento e organização de biblioteca pessoal com base no **CDD (Classificação Decimal de Dewey)**, um dos dois sistemas de organização de bibliotecas mais usados no mundo.
  
🔗 **[Acesse a aplicação ao vivo](https://deweylibraryp.onrender.com/)**
  
---
  
## Sobre o projeto
  
O Dewey Library permite organizar uma coleção pessoal de livros seguindo a lógica da Classificação Decimal de Dewey. Cada livro é categorizado automaticamente pela sua classe principal (000 a 900), com uma cor identificadora para cada categoria.

A aplicação tem dois modos de uso: **visitantes** podem navegar, filtrar e consultar detalhes da coleção; o **modo administrador** (protegido por senha) permite adicionar, editar e remover livros.
  
---

## Funcionalidades

- Busca automática de livros via **Google Books API** com preenchimento de título, autor, ano e categoria;
- Cadastro manual para livros não encontrados na API;
- Suporte ao **código CDD completo** (ex: `869.1`), com cor definida pela classe principal;
- Edição de dados cadastrais, resumo pessoal, nota (0–5 estrelas) e status de leitura;
- Filtros por título, categoria Dewey e status de leitura;
- Código **CDD** sempre visível nos cards, codificado por cor por categoria;
- Modo administrador protegido por senha com contador de livros;
- Interface responsiva.

---
  
## Tecnologias
  
| **Camada** | **Tecnologia** |
|---|---|
| Runtime | Node.js |
| Framework | Express 5 |
| Banco de dados | MongoDB Atlas + Mongoose |
| API externa | Google Books API |
| Frontend | HTML, CSS e JavaScript puro |
| Deploy | Render |
  
---
   
## Referências   
  
- [**CDD: Entendendo como funciona a classificação decimal de Dewey**, de Nalbert Rosa;](https://blog.mettzer.com/classificacao-decimal-de-dewey/)   
- [**Índice para Catalogação - CDD**.](https://www.editoraigp.com.br/publicandosonhos/indice-cdd)
