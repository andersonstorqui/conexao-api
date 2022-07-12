const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tparceiros_acessos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parceiro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tparceiros',
        key: 'id'
      }
    },
    tipo_acesso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ttipos_acesso',
        key: 'id'
      }
    },
    host: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tparceiros_acessos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "parceiro_id",
        using: "BTREE",
        fields: [
          { name: "parceiro_id" },
        ]
      },
      {
        name: "tipo_acesso_id",
        using: "BTREE",
        fields: [
          { name: "tipo_acesso_id" },
        ]
      },
    ]
  });
};
