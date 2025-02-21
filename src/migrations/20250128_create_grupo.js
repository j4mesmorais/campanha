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
      descricao: {
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
