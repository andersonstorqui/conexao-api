var DataTypes = require("sequelize").DataTypes;
var _tparceiros_acessos = require("./tparceiros_acessos");

function initModels(sequelize) {
  var tparceiros_acessos = _tparceiros_acessos(sequelize, DataTypes);

  tparceiros_acessos.belongsTo(tparceiros, { as: "parceiro", foreignKey: "parceiro_id"});
  tparceiros.hasMany(tparceiros_acessos, { as: "tparceiros_acessos", foreignKey: "parceiro_id"});
  tparceiros_acessos.belongsTo(ttipos_acesso, { as: "tipo_acesso", foreignKey: "tipo_acesso_id"});
  ttipos_acesso.hasMany(tparceiros_acessos, { as: "tparceiros_acessos", foreignKey: "tipo_acesso_id"});

  return {
    tparceiros_acessos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
