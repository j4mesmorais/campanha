'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemListaTransmis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_listaTransmis: {
        type: Sequelize.INTEGER
      },
      id_mensagens: {
        type: Sequelize.INTEGER
      },  
      enviado: {
        type: Sequelize.BOOLEAN
      },  
      dtHoraEnviado: {
        type: Sequelize.DATE
      },  
      codEmp: {
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
    await queryInterface.dropTable('ItemListaTransmis');
  }
};