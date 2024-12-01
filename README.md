# Projeto de Controle de Envio de Campanhas Publicitárias por WhatsApp

## Descrição do Projeto
Este projeto implementa um sistema de controle de envio de campanhas publicitárias via WhatsApp. O projeto é estruturado utilizando as seguintes ferramentas:

- **Git** para controle de versão.
- **dotenv** para gerenciar variáveis de ambiente.
- **Sequelize** como ORM para o banco de dados.
- **PostgreSQL** como banco de dados principal.
- **Jest** para testes unitários.

Cada funcionalidade será implementada em uma nova branch, começando pela criação do banco de dados para "Peças Publicitárias" e "Mensagens".

## Estrutura de Dados
As tabelas do banco de dados são:

### Tabela: `PecaPublicit`
- `id` (integer): Identificador único.
- `nomeCriativo` (string): Nome criativo da peça publicitária.
- `dataHora` (integer): Data e hora de criação.
- `codEmp` (integer): Código da empresa.

### Tabela: `Mensagens`
- `id` (integer): Identificador único.
- `mensagem` (json): Conteúdo da mensagem.
- `ordem` (integer): Ordem da mensagem dentro da peça publicitária.
- `id_pecaPublicit` (integer): Relacionamento com a tabela `PecaPublicit`.
- `codEmp` (integer): Código da empresa.

### Regras de Negócio
- Cada peça publicitária pode ter uma ou mais mensagens.
- Ao excluir uma peça publicitária, todas as mensagens associadas são excluídas.
- Mensagens que fazem parte de uma peça publicitária não podem ser excluídas isoladamente.

## Configuração do Ambiente

### Pré-requisitos
- Node.js
- npm ou yarn
- Git
- PostgreSQL

### Instalação do Projeto
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   NODE_ENV=development
   DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
   ```

### Configuração do Banco de Dados
O arquivo `src/config/config.json` define as configurações para os ambientes:

### Executar Migrações e Seeders
Para criar as tabelas e popular o banco de dados com dados iniciais:
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Testes
Para executar os testes:
```bash
npm test
```

## Estrutura do Projeto

```plaintext
├── src
│   ├── config
│   │   └── config.json
│   ├── migrations
│   ├── models
│   │   ├── index.js
│   │   ├── mensagens.js
│   │   └── pecapublicit.js
│   ├── seeders
│   │   ├── 20241128123456-demo-pecapublicit.js
│   │   └── 20241128123457-demo-mensagens.js
│   └── __tests__
│       └── models.test.js
├── .env
├── .sequelizerc
├── jest.config.js
├── package.json
└── README.md
```

## Como Publicar no GitHub

1. **Inicialize o Repositório Local**:
   Certifique-se de que seu projeto está em um diretório versionado pelo Git.
   ```bash
   git init
   git add .
   git commit -m "Inicializando o projeto"
   ```

2. **Crie um Repositório no GitHub**:
   - Acesse [GitHub](https://github.com) e crie um novo repositório.
   - Copie a URL do repositório remoto.

3. **Conecte o Repositório Local ao GitHub**:
   ```bash
   git remote add origin <url-do-repositorio>
   ```

4. **Envie o Projeto para o GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

Agora, seu projeto está disponível no GitHub para colaboração ou armazenamento remoto.

## Próximos Passos
- Implementar funcionalidades de envio de campanhas.
- Criar testes adicionais para cobrir novas funcionalidades.

---
Este projeto está pronto para evoluir com novas implementações. Caso precise de ajuda, consulte a documentação ou entre em contato!