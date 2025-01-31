  // src/models/grupoWhats.js
  'use strict';
  const { Model, DataTypes } = require('sequelize');

  module.exports = (sequelize) => {
    class GrupoWhats extends Model {
      static associate(models) {
        this.hasMany(models.ItemGrupoWhats, {
          foreignKey: 'id_grupo_whats',
          as: 'ItemGrupoWhats',
          onDelete: 'CASCADE', // Configuração para delete cascade
        });
      }
    }
  
    GrupoWhats.init(
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
        codigo: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        imagem: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'GrupoWhats',
        tableName: 'GrupoWhats',
        timestamps: false,
      }
    );
  
    return GrupoWhats;
  };
  