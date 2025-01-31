'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemGrupo', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      celular: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      nome: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemGrupo');
  },
};
