const { sequelize, GrupoWhats, ItemGrupoWhats } = require('../models');

describe.only('Models Associations', () => {
  /*
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Reseta o banco para cada execução
  });
  */
  it('Deve criar 1 grupo de WhatsApp e 4 itens associados', async () => {
    // Criação de um grupo
    const grupo = await GrupoWhats.create({
      descricao: 'Grupo de Teste',
      codigo: 'GRP001',
      imagem: 'grupo-imagem.jpg',
    });

    // Criação de 4 itens associados ao grupo
    const itens = await ItemGrupoWhats.bulkCreate([
      { celular: '+5511999999991', nome: 'João', imagem: 'joao.jpg', id_grupo_whats: grupo.id },
      { celular: '+5511999999992', nome: 'Maria', imagem: 'maria.jpg', id_grupo_whats: grupo.id },
      { celular: '+5511999999993', nome: 'Pedro', imagem: 'pedro.jpg', id_grupo_whats: grupo.id },
      { celular: '+5511999999994', nome: 'Ana', imagem: 'ana.jpg', id_grupo_whats: grupo.id },
    ]);

    expect(grupo).not.toBeNull();
    expect(itens.length).toBe(4);
  });

  it('Deve excluir um grupo e seus itens associados em cascata', async () => {
    // Criação de um grupo
    const grupo = await GrupoWhats.create({
      descricao: 'Grupo para Exclusão',
      codigo: 'GRP002',
      imagem: 'grupo-exclusao.jpg',
    });

    // Criação de 2 itens associados ao grupo
    await ItemGrupoWhats.bulkCreate([
      { celular: '+5511988888881', nome: 'Carlos', imagem: 'carlos.jpg', id_grupo_whats: grupo.id },
      { celular: '+5511988888882', nome: 'Fernanda', imagem: 'fernanda.jpg', id_grupo_whats: grupo.id },
    ]);

    // Excluir o grupo e verificar se os itens foram excluídos
    await sequelize.transaction(async (transaction) => {
      await grupo.destroy({ cascade: true, transaction });
    });

    const itensRestantes = await ItemGrupoWhats.findAll({ where: { id_grupo_whats: grupo.id } });
    expect(itensRestantes.length).toBe(0);
  });

  afterAll(async () => {
    await sequelize.close(); // Fecha a conexão com o banco de dados
  });
});
