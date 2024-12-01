//src/__tests__/RelPecaMensagens.test.js

const { sequelize, ListaTransmis, GrupoLista } = require('../models');


describe('Models Associations', () => {
  
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('Deve criar 1 grupo de Lista de transmissão e 4 pessoas na lista de transmissão associada', async () => {
    const grupos = await GrupoLista.bulkCreate([
      { descricao: 'Grupo 1', codEmp: 1 },
  //    { descricao: 'Grupo 2', codEmp: 1 },
  //    { descricao: 'Grupo 3', codEmp: 1 },
    ]);

    const listatransmis = await ListaTransmis.bulkCreate([
      { nome:'James' , id_grupolista: grupos[0].id, codEmp: 1 },
      { nome:'Henry' ,  id_grupolista: grupos[0].id, codEmp: 1 },
      { nome:'Lobo' , id_grupolista: grupos[0].id, codEmp: 1 },
      { nome:'Morais' , id_grupolista: grupos[0].id, codEmp: 1 },
    ]);

 
    expect(grupos.length).toBe(1);
    expect(listatransmis.length).toBe(4);
  });



  it('Deve excluir um grupo de Lista e seus Vinculados', async () => {
    const grupos = await GrupoLista.create({ descricao: 'Grupo Exclusao', codEmp: 1 });

    await ListaTransmis.bulkCreate([
      { nome:'Vinculado 1' , id_grupolista: grupos.id, codEmp: 1 },
      { nome:'Vinculado 2' , id_grupolista: grupos.id, codEmp: 1 },
    ]);

    await sequelize.transaction(async (transaction) => {
      await grupos.destroy({ cascade: true, transaction });
    });

    const mensagensRestantes = await ListaTransmis.findAll({ where: { id_grupolista: grupos.id } });
    expect(mensagensRestantes.length).toBe(0);
  });

 
  afterAll(async () => {
    await sequelize.close();
  });    

});
