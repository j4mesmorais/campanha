const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ItemDisparo extends Model {
    static associate(models) {
      this.belongsTo(models.Disparo, {
        foreignKey: 'id_disparo',
        as: 'Disparo',
        onDelete: 'CASCADE', // Configuração para delete cascade
      });
    }
  }

  ItemDisparo.init(
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
      id_grupo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'Grupo',
          key: 'id',
        },
        onDelete: 'CASCADE', // Configuração para delete cascade
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
    },
    {
      sequelize,
      modelName: 'ItemDisparo',
      tableName: 'ItemDisparo',
      timestamps: false,
    }
  );

  return ItemDisparo;
};
