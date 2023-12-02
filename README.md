# Documento de Arquitetura do Sistema - Wishlist App

## 1. Introdução:
O projeto Wishlist App consiste em um sistema distribuído composto por uma API (Application Programming Interface), um banco de dados Redis e uma aplicação web. Este documento oferecerá uma visão detalhada da arquitetura do sistema.

## 2. Componentes do Sistema:

### 2.1 API:
A API é construída usando o framework Express em Node.js. Ela fornece endpoints para adicionar itens à wishlist e visualizar a wishlist de um usuário. A comunicação com o banco de dados Redis é realizada para armazenar e recuperar dados da wishlist.

### Tecnologias Utilizadas:

* Node.js com Express

* Redis


### Endpoints:

* /wishlist/add (POST): Adiciona um item à wishlist.

* /wishlist/:userId (GET): Retorna a wishlist de um usuário.

### 2.2 Banco de Dados (Redis):
O Redis é utilizado como um banco de dados em memória para armazenar a wishlist dos usuários. Ele é acessado pela API para realizar operações de adição e recuperação de dados.

### Tecnologias Utilizadas:

* Redis

#### Configuração:

* Host: redis

* Porta: 6379

### 2.3 Aplicação Web:
A aplicação web é uma interface do usuário que permite aos usuários interagirem com a API. Ela é construída usando HTML, CSS e JavaScript, e utiliza fetch API para realizar requisições à API.

### Tecnologias Utilizadas:

* HTML, CSS, JavaScript

* Fetch API

#### Funcionalidades:

* Adição de itens à wishlist

* Visualização da wishlist de um usuário

## 3. Arquitetura Distribuída:
O sistema é distribuído em containers Docker. Cada componente (API, Redis, Aplicação Web) é encapsulado em um container independente, permitindo a execução em nós de processamento individuais.

### Docker:

* Containers para API, Redis e Aplicação Web
* Docker Compose para orquestração

## 4. Comunicação entre Componentes:

A comunicação entre a Aplicação Web e a API é realizada por meio de requisições HTTP. A API se comunica com o Redis para operações de leitura e escrita na wishlist.

## 6. Conclusão:
O Wishlist App demonstra uma arquitetura distribuída com a API, o Redis e a Aplicação Web encapsulados em containers Docker. O uso de tecnologias como Node.js, Redis e Docker permite flexibilidade, escalabilidade e distribuição eficientes do sistema.
