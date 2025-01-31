'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grupo', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      origem_lista: {
        type: Sequelize.JSON,
        allowNull: true,
      },      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grupo');
  },
};
