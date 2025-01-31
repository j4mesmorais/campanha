// src/models/naoEnviar.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NaoEnviar extends Model {
    static associate(models) {
      /*
      this.hasMany(models.Mensagens, {
        foreignKey: 'id_listaTransmis',
        as: 'listatransmis',
        onDelete: 'CASCADE', // Exclusão em cascata
        hooks: true,         // Certifique-se de que os hooks estão ativados
      });
      */
    }
}
  NaoEnviar.init({
    cadastro: DataTypes.JSON,
    celular: DataTypes.STRING,
    motivo: DataTypes.STRING,
    codEmp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'NaoEnviar',
    tableName: 'NaoEnviar',
  });


  return NaoEnviar;
};
