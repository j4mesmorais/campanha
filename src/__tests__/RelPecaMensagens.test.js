//src/__tests__/RelPecaMensagens.test.js

const { sequelize, Mensagens, PecaPublicit } = require('../models');


describe('Models Associations', () => {
  
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('Deve criar 3 peças publicitárias e várias mensagens associadas', async () => {
    const pecas = await PecaPublicit.bulkCreate([
      { nomeCriativo: 'Peca 1', codEmp: 1 },
      { nomeCriativo: 'Peca 2', codEmp: 1 },
      { nomeCriativo: 'Peca 3', codEmp: 1 },
    ]);

    const mensagens = await Mensagens.bulkCreate([
      { mensagem: { texto: 'Mensagem 1' }, ordem: 1, id_pecaPublicit: pecas[0].id, codEmp: 1 },
      { mensagem: { texto: 'Mensagem 2' }, ordem: 2, id_pecaPublicit: pecas[0].id, codEmp: 1 },
      { mensagem: { texto: 'Mensagem 3' }, ordem: 1, id_pecaPublicit: pecas[1].id, codEmp: 1 },
    ]);

    expect(pecas.length).toBe(3);
    expect(mensagens.length).toBe(3);
  });

  it('Deve excluir uma peça publicitária e suas mensagens associadas', async () => {
    const peca = await PecaPublicit.create({ nomeCriativo: 'Peca Exclusão', codEmp: 1 });

    await Mensagens.bulkCreate([
      { mensagem: { texto: 'Mensagem vinculada 1' }, ordem: 1, id_pecaPublicit: peca.id, codEmp: 1 },
      { mensagem: { texto: 'Mensagem vinculada 2' }, ordem: 2, id_pecaPublicit: peca.id, codEmp: 1 },
    ]);

    await sequelize.transaction(async (transaction) => {
      await peca.destroy({ cascade: true, transaction });
    });

    const mensagensRestantes = await Mensagens.findAll({ where: { id_pecaPublicit: peca.id } });
    expect(mensagensRestantes.length).toBe(0);
  });

  it('Não deve permitir a exclusão de uma mensagem associada a uma peça publicitária', async () => {
    const peca = await PecaPublicit.create({ nomeCriativo: 'Peca com Mensagem', codEmp: 1 });
    const mensagem = await Mensagens.create({
      mensagem: { texto: 'Mensagem vinculada' },
      ordem: 1,
      id_pecaPublicit: peca.id,
      codEmp: 1,
    });

    try {
      await mensagem.destroy();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe('Não é possível excluir uma mensagem associada a uma peça publicitária.');
    }

    const mensagemExiste = await Mensagens.findByPk(mensagem.id);
    expect(mensagemExiste).toBeDefined();

  });

  afterAll(async () => {
    await sequelize.close();
  });    

});
