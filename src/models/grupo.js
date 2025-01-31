  // src/models/grupo.js
  'use strict';
  const { Model, DataTypes } = require('sequelize');

  module.exports = (sequelize) => {
    class Grupo extends Model {
      static associate(models) {
        this.hasMany(models.ItemGrupoWhats, {
          foreignKey: 'id_grupo',
          as: 'ItemGrupo',
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
  