const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ItemPecaPublicitaria extends Model {
    static associate(models) {
      this.belongsTo(models.GrupoWhats, {
        foreignKey: 'id_peca_publicitaria',
        as: 'PecaPublicitaria',
        onDelete: 'CASCADE', // Configuração para delete cascade
      });
    }
  }

  ItemPecaPublicitaria.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      id_peca_publicitaria: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'PecaPublicitaria',
          key: 'id',
        },
        onDelete: 'CASCADE', // Configuração para delete cascade
      },
      mensagem: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      ordem: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ItemPecaPublicitaria',
      tableName: 'ItemPecaPublicitaria',
      timestamps: false,
    }
  );

  return ItemPecaPublicitaria;
};
