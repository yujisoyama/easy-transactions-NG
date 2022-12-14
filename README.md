# Easy Transactions NG

Aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.
Especificações do projeto: [Processo Seletivo NG <> TRYBE](https://ngcash.notion.site/Processo-Seletivo-NG-TRYBE-223de32e1ed047f2aa90cc0da84754ee)

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Easy Transactions NG**
| :label: Tecnologias | React, NodeJS, TypeORM, PostgreSQL, Tailwind, Docker
| :rocket: URL         | not live yet

![](https://user-images.githubusercontent.com/64661100/202777295-1ec11b42-0ed4-4c7d-8e71-7617aa59cbc5.png#vitrinedev)

## ▶️ Rodando localmente
### Pré-requisitos:
   - Ter o Docker instalado na sua máquina, pois toda a aplicação será subida em containers no Docker.

### Passo a Passo:
   - Clone esse repositório:
   ```
   git clone https://github.com/yujisoyama/easy-transactions-NG.git
   ```
   - Entre na pasta do projeto:
   ```
   cd easy-transactions-NG
   ```
   - Vamos construir os containers da aplicação server-side e da aplicação client-side. Para isso, execute os dois comandos abaixo:
   ```
   docker compose build node
   ```
   ```
   docker compose build web
   ```
   - Finalizando a construção dos dois containers, execute o seguinte comando para rodar toda a aplicação:
   ```
   docker compose up
   ```
   - Para acessar a interface web após a subida dos containers, entre no endereço abaixo: 
   ```
   http://localhost:5137/
   ```
   
## A arquitetura e design das tabelas no PostgreSQL foi feita da seguinte forma:
<p align="center"><img src="https://user-images.githubusercontent.com/64661100/205955362-3b8fc53e-e9c0-467d-ba9d-c03537bd8835.png" /></p>

## 🛠 Stacks utilizadas

> Front-end: 

- <strong>React</strong>: utilizei o React, seus Hooks, Context API e algumas de suas bibliotecas para fazer toda a interface e manipulação de dados em seus componentes.
- <strong>TypeScript</strong>: utilizei para tipar a aplicação através de interfaces.
- <strong>TailwindCSS</strong>: utilizei o TailWind CSS na estilização. Acho o Tailwind com o React uma boa combinação, pois a componentização do React impede em estilizações muito longas junto com o código.
- <strong>Axios</strong>: utilizei para o consumo de API's.


> Back-end: 

- <strong>Node e Express</strong>: desenvolvimento server-side e a criação de suas rotas.
- <strong>TypeScript</strong>: utilizei para tipar a aplicação através de interfaces.
- <strong>TypeORM</strong>: integração da aplicação com o PostgreSQL através de classes entidades, consultas, e design da arquitetura do banco de dados.
- <strong>JWT</strong>: JsonWebToken para criação de token do usuário.
- <strong>Bcrypt</strong>: hashear a senha salva no banco.
