// src/models/naoEnviar.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ItemListaTransmis extends Model {
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

ItemListaTransmis.init({
    id_listaTransmis: DataTypes.INTEGER,
    id_mensagens: DataTypes.INTEGER,
    enviado: DataTypes.BOOLEAN,
    dtHoraEnviado: DataTypes.DATE,
    codEmp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ItemListaTransmis',
  });

  return ItemListaTransmis;
};
