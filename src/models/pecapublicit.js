// /usr/model/pecapublicit.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PecaPublicit extends Model {
    static associate(models) {
      this.hasMany(models.Mensagens, {
        foreignKey: 'id_pecaPublicit',
        as: 'mensagens',
        onDelete: 'CASCADE', // Exclusão em cascata
        hooks: true,         // Certifique-se de que os hooks estão ativados
      });
    }
  }
  PecaPublicit.init({
    nomeCriativo: DataTypes.STRING,
    dataHora: DataTypes.DATE,
    codEmp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PecaPublicit',
  });
  return PecaPublicit;
};
