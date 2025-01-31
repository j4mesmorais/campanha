'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemItemDisparo', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_item_disparo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'ItemDisparo', // Nome da tabela referenciada
          key: 'id',           // Chave referenciada
        },
        onDelete: 'CASCADE',    // Delete cascade para remover os detalhes
        onUpdate: 'CASCADE',    // Atualizar cascata para mudanças no master
      },      
      id_item_grupo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'ItemGrupo', // Nome da tabela referenciada
          key: 'id',           // Chave referenciada
        },
        onDelete: 'CASCADE',    // Delete cascade para remover os detalhes
        onUpdate: 'CASCADE',    // Atualizar cascata para mudanças no master
      },
      id_item_peca_publicitaria: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'ItemPecaPublicitaria', // Nome da tabela referenciada
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
      data: {
        type: Sequelize.DATE
      },
      enviado: {
        type: Sequelize.BOOLEAN
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemItemDisparo');
  },
};
