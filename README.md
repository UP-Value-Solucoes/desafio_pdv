# Desafio Técnico - Sistema de Ponto de Venda (PDV)

Bem-vindo ao desafio técnico! O objetivo deste desafio é desenvolver um sistema de Ponto de Venda (PDV) simples, que permitirá o cadastro e venda de produtos. O desafio avaliará suas habilidades em **React.js** e **Node.js** com **TypeScript**, além de seu conhecimento em manipulação de dados e organização de código.

## Requisitos

### 1. **Frontend**
- O frontend deverá ser desenvolvido utilizando **ReactJS** com **TypeScript**.
- Deverá conter uma interface simples onde será possível:
  - Cadastrar produtos (nome, preço, quantidade em estoque).
  - Visualizar a lista de produtos cadastrados.
  - Realizar vendas, selecionando produtos e inserindo a quantidade.
  - Exibir o valor total da venda e subtrair a quantidade vendida do estoque.

### 2. **Backend**
- O backend deverá ser desenvolvido utilizando **Node.js** com **Express** e **TypeScript**.
- O backend será responsável por:
  - Gerenciar as rotas de cadastro, consulta e venda de produtos.
  - Persistir os dados dos produtos e das vendas em um banco de dados (ver opções abaixo).
  - Realizar as validações necessárias, como verificar se há estoque suficiente para realizar a venda.

### 3. **Banco de Dados**
O candidato poderá escolher o método de persistência de dados que preferir entre as seguintes opções:
- **CSV**
- **XLSX**
- **JSON**
- **Banco Relacional**: PostgreSQL ou MySQL

## Instruções

1. **Organização do diretório**: Organize o projeto com pastas claras para **frontend** e **backend**. Adicione um arquivo `README` em cada parte, explicando como rodar o projeto localmente.
   
2. **Funcionalidades Esperadas**:
   - **Cadastro de Produtos**: Tela para inserir nome, preço e quantidade inicial de produtos.
   - **Listagem de Produtos**: Tela com a lista de todos os produtos cadastrados, incluindo informações de estoque.
   - **Venda de Produtos**: Tela para selecionar produtos, definir a quantidade e calcular o valor total da venda.
   - **Atualização de Estoque**: Ao realizar uma venda, o estoque deve ser atualizado automaticamente.

3. **Configuração**:
   - O projeto deverá incluir instruções no `README` para rodar o frontend e backend localmente.
   - Forneça exemplos de dados, se estiver usando CSV, XLSX ou JSON.
   - Se estiver usando um banco de dados relacional, inclua um script SQL para a criação das tabelas necessárias.

Para qualquer dúvida relacionado ao desafio enviar um e-mail para victor.bernardo@upvalue.com.br com o nome do candidato e a dúvida em questão.

## Avaliação

O seu código será avaliado com base nos seguintes critérios:

1. **Organização**:
   - Estrutura e organização do repositório.
   - Nomenclatura de arquivos e funções.
   - Comentários e documentação do código.

2. **Domínio**:
   - Qualidade e clareza na implementação do código.
   - Uso correto das bibliotecas e ferramentas (React, Node.js, TypeScript).
   - Validações e tratamento de erros.

3. **Funcionalidade**:
   - O sistema funciona conforme especificado?
   - As operações de cadastro, listagem e venda de produtos estão corretas?
   - A persistência de dados funciona conforme o banco de dados escolhido?

## Regras

- Você tem até dia **07/10/2024** ás **23:59** para completar o desafio.
- Ao finalizar, realize um **PULL REQUEST (PR)** com o nome do candidato.

## Stack e Tecnologias

- **Frontend**: React.js com TypeScript.
- **Backend**: Node.js com Express e TypeScript.
- **Banco de Dados**: Escolha entre CSV, XLSX, JSON ou banco relacional (PostgreSQL/MySQL).

Estamos ansiosos para ver sua solução. Boa sorte e bom código!
