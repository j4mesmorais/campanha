// src/models/mensagens.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mensagens extends Model {
    static associate(models) {
      this.belongsTo(models.PecaPublicit, {
        foreignKey: 'id_pecaPublicit',
        onDelete: 'CASCADE', // Exclui mensagens quando a peça publicitária é removida
      });
    }
  }

  Mensagens.init({
    mensagem: DataTypes.JSON,
    ordem: DataTypes.INTEGER,
    id_pecaPublicit: DataTypes.INTEGER,
    codEmp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Mensagens',
  });


  return Mensagens;
};
