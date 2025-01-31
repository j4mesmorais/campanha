'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemDisparo', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_disparo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Disparo', // Nome da tabela referenciada
          key: 'id',           // Chave referenciada
        },
        onDelete: 'CASCADE',    // Delete cascade para remover os detalhes
        onUpdate: 'CASCADE',    // Atualizar cascata para mudanças no master
      },      
      id_grupo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Grupo', // Nome da tabela referenciada
          key: 'id',           // Chave referenciada
        },
        onDelete: 'CASCADE',    // Delete cascade para remover os detalhes
        onUpdate: 'CASCADE',    // Atualizar cascata para mudanças no master
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

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemDisparo');
  },
};
