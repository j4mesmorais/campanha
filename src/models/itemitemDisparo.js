const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ItemItemDisparo extends Model {
    static associate(models) {
      this.belongsTo(models.Disparo, {
        foreignKey: 'id_item_disparo',
        as: 'ItemDisparo',
        onDelete: 'CASCADE', // Configuração para delete cascade
      });
    }
  }

  ItemItemDisparo.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      id_item_disparo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'ItemDisparo',
          key: 'id',
        },
        onDelete: 'CASCADE', // Configuração para delete cascade
      },
      id_item_grupo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'ItemGrupo',
          key: 'id',
        },
        onDelete: 'CASCADE', // Configuração para delete cascade
      },     
      id_item_peca_publicitaria: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'ItemPecaPublicitaria',
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
      data: {
        type: DataTypes.DATE,
        allowNull: false,
      },        
      enviado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },                         
    },
    {
      sequelize,
      modelName: 'ItemItemDisparo',
      tableName: 'ItemItemDisparo',
      timestamps: false,
    }
  );

  return ItemItemDisparo;
};
