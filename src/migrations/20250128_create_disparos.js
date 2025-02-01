'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Disparo', {
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
      data: {
        type: Sequelize.DATE,
        allowNull: true,
      },        
      caixa_saida: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      status: {
        type: Sequelize.TEXT,
        allowNull: true,
      }, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Disparo');
  },
};
