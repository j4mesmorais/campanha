const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ItemGrupo extends Model {
    static associate(models) {
      this.belongsTo(models.GrupoWhats, {
        foreignKey: 'id_grupo',
        as: 'Grupo',
        onDelete: 'CASCADE', // Configuração para delete cascade
      });
    }
  }

  ItemGrupo.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      id_grupo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'Grupo',
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
      modelName: 'ItemGrupo',
      tableName: 'ItemGrupo',
      timestamps: false,
    }
  );

  return ItemGrupo;
};
