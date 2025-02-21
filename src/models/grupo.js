  // src/models/grupo.js
  'use strict';
  const { Model, DataTypes } = require('sequelize');

  module.exports = (sequelize) => {
    class Grupo extends Model {
      static associate(models) {
        this.hasMany(models.ItemGrupo, {
          foreignKey: 'id_grupo',
          as: 'ItemGrupo',
          onDelete: 'CASCADE', // Configuração para delete cascade
        });
        this.belongsTo(models.Disparo, {
          foreignKey: 'id_disparo',
          as: 'Disparo',
          onDelete: 'CASCADE', // Configuração para delete cascade
        });        
      }
    }
  
    Grupo.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        id_disparo: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'Disparo',
            key: 'id',
          },
          onDelete: 'CASCADE', // Configuração para delete cascade
        },        
        descricao: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        imagem: {
          type: DataTypes.TEXT,
          allowNull: true,
        },        
        origem_lista: {
          type: DataTypes.JSON,
          allowNull: false,
        },

      },
      {
        sequelize,
        modelName: 'Grupo',
        tableName: 'Grupo',
        timestamps: false,
      }
    );
  
    return Grupo;
  };
  