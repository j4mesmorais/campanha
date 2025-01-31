'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemPecaPublicitaria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 

      id_peca_publicitaria: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'PecaPublicitaria', // Nome da tabela referenciada
          key: 'id',           // Chave referenciada
        },
        onDelete: 'CASCADE',    // Delete cascade para remover os detalhes
        onUpdate: 'CASCADE',    // Atualizar cascata para mudanças no master
      },

      mensagem: {
        type: Sequelize.JSON
      },
      ordem: {
        type: Sequelize.INTEGER
      },



    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemPecaPublicitaria');
  }
};