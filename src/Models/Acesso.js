const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Parceiro = require("./Parceiro");
const Tipo_acesso = require("./Tipo_acesso");

const Acesso = db.define("Parceiro_acesso", {
  usuario: {
    type: DataTypes.STRING,
    // required: true,
  },
  senha: {
    type: DataTypes.STRING,
    // required: true,
  },
  host: {
    type: DataTypes.STRING,
    // required: true,
  },
  observacao: {
    type: DataTypes.STRING,
    // required: true,
  },
});

Parceiro.hasMany(Acesso);
Acesso.belongsTo(Parceiro);

// Tipo_acesso.hasMany(Acesso);
// Acesso.belongsTo(Tipo_acesso);

module.exports = Acesso;

/**
 * usuario=ok
 *  senha=ok
 * host=ok
 * observacao=ok
 *
 * primaryKey =>
 *
 * constraint:
 *(parceiro_id) reference (tParceiro(id))=ok
 *(tipo_acesso) reference (tTipo_acesso(id))=?
 */
