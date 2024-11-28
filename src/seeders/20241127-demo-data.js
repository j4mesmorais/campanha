'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserir peças publicitárias primeiro
    const pecas = await queryInterface.bulkInsert(
      'PecaPublicits', // Nome correto da tabela no banco
      [
        {
          nomeCriativo: 'Campanha Natal',
          dataHora: new Date(),
          codEmp: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCriativo: 'Campanha Ano Novo',
          dataHora: new Date(),
          codEmp: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true } // Retornar os registros criados
    );

    // Verifique se `pecas` contém os registros retornados
    console.log('Pecas inseridas:', pecas);

    // Inserir mensagens relacionadas às peças publicitárias criadas
    await queryInterface.bulkInsert('Mensagens', [
      {
        mensagem: JSON.stringify({ texto: 'Mensagem 1 da Campanha Natal' }),
        ordem: 1,
        id_pecaPublicit: pecas[0].id, // Usar o ID da primeira peça
        codEmp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mensagem: JSON.stringify({ texto: 'Mensagem 2 da Campanha Natal' }),
        ordem: 2,
        id_pecaPublicit: pecas[0].id,
        codEmp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mensagem: JSON.stringify({ texto: 'Mensagem 1 da Campanha Ano Novo' }),
        ordem: 1,
        id_pecaPublicit: pecas[1].id, // Usar o ID da segunda peça
        codEmp: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Excluir dados na ordem inversa de inserção
    await queryInterface.bulkDelete('Mensagens', null, {});
    await queryInterface.bulkDelete('PecaPublicits', null, {});
  },
};
