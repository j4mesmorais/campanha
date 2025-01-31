//src/__tests__/RelPecaItemPecaPublicit.test.js

const { sequelize, ItemPecaPublicitaria, PecaPublicitaria } = require('../models');
//const { sequelize, PecaPublicitaria } = require('../models');

describe.only('Models Associations', () => {
  
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('Deve criar 3 peças publicitárias e várias mensagens associadas', async () => {
    const dataHora = new Date('2024-11-28T10:22:00Z');
    const pecas = await PecaPublicitaria.bulkCreate([
      { nome_criativo: 'Peca 1', data_hora:dataHora, cod_emp: 1 },
      { nome_criativo: 'Peca 2', data_hora:dataHora, cod_emp: 1 },
      { nome_criativo: 'Peca 3', data_hora:dataHora, cod_emp: 1 },
    ]);

    const mensagens = await ItemPecaPublicitaria.bulkCreate([
      { mensagem: "{ 'texto': 'Mensagem 1' }", ordem: 1, id_peca_publicitaria: pecas[0].id, codEmp: 1 },
      { mensagem: "{ 'texto': 'Mensagem 2' }", ordem: 2, id_peca_publicitaria: pecas[0].id, codEmp: 1 },
      { mensagem: "{ 'texto': 'Mensagem 3' }", ordem: 1, id_peca_publicitaria: pecas[1].id, codEmp: 1 },
    ]);

    expect(pecas.length).toBe(3);
    expect(mensagens.length).toBe(3);
  });

  it('Deve excluir uma peça publicitária e suas mensagens associadas', async () => {
    const dataHora = new Date('2024-11-28T10:22:00Z');
    const peca = await PecaPublicitaria.create({ nome_criativo: 'Peca Exclusão',data_hora:dataHora, cod_emp: 1 });

    await ItemPecaPublicitaria.bulkCreate([
      { mensagem: "{ texto: 'Mensagem vinculada 1' }", ordem: 1, id_peca_publicitaria: peca.id, cod_emp: 1 },
      { mensagem: "{ texto: 'Mensagem vinculada 2' }", ordem: 2, id_peca_publicitaria: peca.id, cod_emp: 1 },
    ]);

    await sequelize.transaction(async (transaction) => {
      await peca.destroy({ cascade: true, transaction });
    });

    const mensagensRestantes = await ItemPecaPublicitaria.findAll({ where: { id_peca_publicitaria: peca.id } });
    expect(mensagensRestantes.length).toBe(0);
  });
  
  afterAll(async () => {
    await sequelize.close();
  });    

});
