  // src/models/PecaPublicitaria.js
  'use strict';
  const { Model, DataTypes } = require('sequelize');

  module.exports = (sequelize) => {
    class PecaPublicitaria extends Model {
      static associate(models) {
        this.hasMany(models.ItemGrupoWhats, {
          foreignKey: 'id_peca_publicitaria',
          as: 'ItemPecaPublicitaria',
          onDelete: 'CASCADE', // Configuração para delete cascade
        });
      }
    }
  
    PecaPublicitaria.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        nome_criativo: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        data_hora: {
          type: DataTypes.DATE,
          allowNull: true,
        },        
        cod_emp: {
          type: DataTypes.JSON,
          allowNull: false,
        },

      },
      {
        sequelize,
        modelName: 'PecaPublicitaria',
        tableName: 'PecaPublicitaria',
        timestamps: false,
      }
    );
  
    return PecaPublicitaria;
  };
  