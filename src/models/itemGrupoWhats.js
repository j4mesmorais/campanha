const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ItemGrupoWhats extends Model {
    static associate(models) {
      this.belongsTo(models.GrupoWhats, {
        foreignKey: 'id_grupo_whats',
        as: 'GrupoWhats',
        onDelete: 'CASCADE', // Configuração para delete cascade
      });
    }
  }

  ItemGrupoWhats.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      id_grupo_whats: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'GrupoWhats',
          key: 'id',
        },
        onDelete: 'CASCADE', // Configuração para delete cascade
      },
      celular: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nome: {
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
      modelName: 'ItemGrupoWhats',
      tableName: 'ItemGrupoWhats',
      timestamps: false,
    }
  );

  return ItemGrupoWhats;
};
