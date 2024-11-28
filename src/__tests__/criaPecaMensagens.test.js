//src/__tests__/criaPecaMensagens.test.js
const { sequelize, PecaPublicit, Mensagens } = require('../models');

describe('Models Associations', () => {

  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('Deve criar uma Peça Publicitária e suas Mensagens', async () => {
    // Data e hora: 28/11/2024 às 10:22
    const dataHora = new Date('2024-11-28T10:22:00Z');

    const peca = await PecaPublicit.create({
      nomeCriativo: 'Promoção de Natal',
      dataHora, // Usando o tipo DATE
      codEmp: 1,
    });

    const mensagem = await Mensagens.create({
      mensagem: { texto: 'Compre já!' },
      ordem: 1,
      id_pecaPublicit: peca.id,
      codEmp: 1,
    });

    const mensagens = await peca.getMensagens();
    expect(mensagens.length).toBe(1);
    expect(mensagens[0].mensagem.texto).toBe('Compre já!');
    expect(peca.dataHora.toISOString()).toBe(dataHora.toISOString()); // Verifica a dataHora
  });

  afterAll(async () => {
    await sequelize.close(); // Fecha a conexão com o banco de dados
  });

});
