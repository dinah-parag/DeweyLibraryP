Neste projeto temos como objetivo a criação de um banco de dados para armazenamento e organização de biblioteca pessoal com base no CDD (Classificação Decimal de Dewey), um dos dois sistemas de organização de bibliotecas mais usados no mundo.
A presente aplicação, além de ser uma prática em **Node.js** é também um projeto com uso de bancos de dados externos (***Google Books API***) e de criação de base de dados.
   
**Etapas do projeto**:   


  1. Configuração, integração com API de livros e lógica de mapeamento Dewey ☑️
		- Integração com o Mundo Externo;
  		- Modelagem do Livro "Inteligente";   
		- O "Mapeador" de Dewey;   
		- Configurando a Estética do Portfólio (Teoria de Design);    
 2. Estrutura de dados (banco de dados) e rotas de criação/edição (com nota e resumo) ☑️  
	- Conexão com Banco de Dados NoSQL (MongoDB);  
	- Uso de Variáveis de Ambiente (.env) para segurança;  
  	- Lógica de Parâmetros de URL (:id);  
  	- Manipulação de dados com Mongoose;  
  3. Lógica de busca e filtros avançados ☑️
		- Busca por título com regex (parcial e sem distinção de maiúsculas);
		- Filtro por categoria Dewey com lógica hierárquica (800 engloba 810, 820...);
  		- Filtro por status de leitura, combinável com busca por título.

4. WebDev, finalização geral e Deploy.  
     
   
**Referências**:   
[**CDD: Entendendo como funciona a classificação decimal de Dewey**, de Nalbert Rosa;](https://blog.mettzer.com/classificacao-decimal-de-dewey/)   
[**Índice para Catalogação - CDD**.](https://www.editoraigp.com.br/publicandosonhos/indice-cdd)
