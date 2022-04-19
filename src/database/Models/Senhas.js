const Sequelize = require("sequelize");
const database = require("../database");

const Senhas = database.define("Senhas", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  parceiro_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tipo_acesso_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  host: {
    type: Sequelize.STRING,
  },
  usuario: {
    type: Sequelize.STRING,
  },
  senha: {
    type: Sequelize.STRING,
  },
  observacao: {
    type: Sequelize.STRING,
  },
});

module.exports = Senhas;
