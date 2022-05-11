const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Tipo_acesso = db.define("Tipo_acesso", {
  servico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  ativo: {
    type: DataTypes.TINYINT,
  },
});

module.exports = Tipo_acesso;

/**
 * servico
 * descricao
 * ativo
 *
 * Primarikey(id)
 */
