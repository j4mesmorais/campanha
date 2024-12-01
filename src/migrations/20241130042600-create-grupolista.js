'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GrupoLista', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_listaTransmis: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      descricao:{
        type: Sequelize.STRING
      },
      origemlista: {
        type: Sequelize.JSON
      },
      codEmp:{ 
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GrupoLista');
  }
};