  // src/models/grupolista.js
  'use strict';
  const { Model } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class GrupoLista extends Model {
        static associate(models) {
          this.hasMany(models.Mensagens, {
            foreignKey: 'id_listaTransmis',
            as: 'listatransmis',
            onDelete: 'CASCADE', // Exclusão em cascata
            hooks: true,         // Certifique-se de que os hooks estão ativados
          });
        }
    }
    GrupoLista.init({
      id_listaTransmis: DataTypes.INTEGER,        
      descricao: DataTypes.STRING,
      origemlista:  DataTypes.JSON,
      codEmp: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'GrupoLista',
    });
  
  
    return GrupoLista;
  };