'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ListaTransmis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cadastro: {
        type: Sequelize.JSON
      },
      celular:{
        type: Sequelize.STRING
      },
      nome:{ 
        type: Sequelize.STRING
      },

      enviado:{  
        type: Sequelize.BOOLEAN
      },
      dtEnviado:{ 
      
        type: Sequelize.DATE
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
    await queryInterface.dropTable('ListaTransmis');
  }
};