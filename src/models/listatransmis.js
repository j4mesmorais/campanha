  // src/models/listatransmis.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ListaTransmis extends Model {
    static associate(models) {
        this.belongsTo(models.GrupoLista, {
        foreignKey: 'id_grupolista',
        onDelete: 'CASCADE', // Exclui mensagens quando o grupo de Lista é removido
        });
    }
  }
  ListaTransmis.init({
    id_grupolista:DataTypes.INTEGER,
    cadastro: DataTypes.JSON,
    celular: DataTypes.STRING,
    nome: DataTypes.STRING,
    enviado:  DataTypes.BOOLEAN,
    dtEnviado: DataTypes.DATE,
    codEmp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ListaTransmis',
  });


  return ListaTransmis;
};
