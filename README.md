# Gerenciamento de Campanhas de Envio de Mensagens

Este projeto é um sistema para gerenciamento de campanhas de envio de mensagens, desenvolvido em Node.js. Utilizamos Sequelize para ORM, Jest para testes, SQLite para banco de dados de testes e suporte a migrações de banco de dados para facilitar futuras mudanças para PostgreSQL ou outros bancos.

## Passo 1: Configuração Inicial do Projeto

### 1.1. Inicializar o Projeto com Git

1. Crie uma pasta para o projeto:
   ```bash
   mkdir gerenciamento-mensagens
   cd gerenciamento-mensagens
   ```

2. Inicialize um repositório Git:
   ```bash
   git init
   ```

3. Crie um arquivo `.gitignore` e adicione o seguinte conteúdo para ignorar arquivos gerados:
   ```
   node_modules/
   *.sqlite
   .env
   ```

4. Crie o primeiro commit:
   ```bash
   git add .
   git commit -m "Inicialização do repositório"
   ```

### 1.2. Configurar o Ambiente Node.js

1. Inicialize o projeto Node.js:
   ```bash
   npm init -y
   ```

2. Instale as dependências principais:
   ```bash
   npm install sequelize sqlite3
   ```

3. Instale as dependências de desenvolvimento:
   ```bash
   npm install --save-dev sequelize-cli jest
   ```

4. Adicione os scripts ao `package.json` para facilitar o uso:
   ```json
   "scripts": {
     "start": "node index.js",
     "test": "jest",
     "migrate": "sequelize db:migrate",
     "seed": "sequelize db:seed:all"
   }
   ```

5. Configure o Jest criando um arquivo `jest.config.js`:
   ```javascript
   module.exports = {
     testEnvironment: 'node',
     verbose: true,
   };
   ```

### 1.3. Configurar o Sequelize

1. Inicialize o Sequelize CLI:
   ```bash
   npx sequelize-cli init
   ```

2. Ajuste o arquivo `config/config.json` para usar SQLite no ambiente de desenvolvimento e testes:
   ```json
   {
     "development": {
       "dialect": "sqlite",
       "storage": "./dev.sqlite"
     },
     "test": {
       "dialect": "sqlite",
       "storage": "./test.sqlite"
     },
     "production": {
       "dialect": "postgres",
       "url": "<string-de-conexão-do-banco>"
     }
   }
   ```

3. Crie o commit com a configuração inicial:
   ```bash
   git add .
   git commit -m "Configuração inicial do projeto com Sequelize e Jest"
   ```

### Próximos Passos

No próximo passo, criaremos a tabela **Mensagens** usando Sequelize Migrations e documentaremos no README como criar e rodar migrações.

