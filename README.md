# <p align="center"> NG Desafio </p>

<p align="center">Aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/64661100/202777295-1ec11b42-0ed4-4c7d-8e71-7617aa59cbc5.png" /></p>

## ▶️ Rodando localmente
### Pré-requisitos:
   - Ter o Docker instalado na sua máquina, pois toda a aplicação será subida em containers no Docker.

### Passo a Passo:
   - Clone esse repositório:
   ```
   git clone https://github.com/yujisoyama/ngdesafio.git
   ```
   - Entre na pasta do projeto:
   ```
   cd ngdesafio
   ```
   - Vamos construir os containers da aplicação server-side e da aplicação client-side. Para isso, execute os dois comandos abaixo:
   ```
   docker compose build server
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
   http://localhost:5137/)
   ```

## 🛠 Stacks utilizadas

> Front-end: 

- <strong>React</strong>: utilizei o React, seus Hooks, Context API e algumas de suas bibliotecas para fazer toda a interface e manipulação de dados em seus componentes.
- <strong>TypeScript</strong>: utilizei para tipar a aplicação através de interfaces.
- <strong>TailwindCSS</strong>: utilizei o TailWind CSS na estilização. Acho o Tailwind com o React uma boa combinação, pois a componentização do React impede em estilizações muito longas junto com o código.
- <strong>Axios</strong>: utilizei para o consumo de API's.


> Back-end: 

- <strong>Node e Express</strong>: utilizei para o desenvolvimento server-side e a criação de suas rotas.
- <strong>TypeScript</strong>: utilizei para tipar a aplicação através de interfaces.
- <strong>TypeORM</strong>: utilizei para fazer toda a integração do servidor com o banco de dados PostgreSQL.
- <strong>Postman</strong>: utilizei para testar os end-points desenvolvidos e a troca de informações do servidor com o client em Json.
