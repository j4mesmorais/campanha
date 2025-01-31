  // src/models/disparos.js
  'use strict';
  const { Model, DataTypes } = require('sequelize');

  module.exports = (sequelize) => {
    class Disparo extends Model {
      static associate(models) {
        this.hasMany(models.ItemGrupoWhats, {
          foreignKey: 'id_disparo',
          as: 'ItemDisparo',
          onDelete: 'CASCADE', // Configuração para delete cascade
        });
      }
    }
  
    Disparo.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        descricao: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        data: {
          type: DataTypes.DATE,
          allowNull: true,
        },        
        caixa_saida: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        status: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Disparo',
        tableName: 'Disparo',
        timestamps: false,
      }
    );
  
    return Disparo;
  };
  