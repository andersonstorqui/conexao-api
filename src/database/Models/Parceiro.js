const Sequelize = require("sequelize");
const database = require("../database");
const Senha = require("./Senhas");

const Parceiro = database.define("Parceiro", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_fantasia: {
    type: Sequelize.STRING,
  },
  razao_social: {
    type: Sequelize.STRING,
  },
  cnpj_cpf: {
    type: Sequelize.REAL,
  },
  situacao: {
    type: Sequelize.BLOB,
    allowNull: false,
  },
  criado_por: {
    type: Sequelize.INTEGER,
  },
  criado_em: {
    type: Sequelize.STRING,
  },
  alterado_por: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  alterado_em: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  insc_est: {
    type: Sequelize.STRING,
  },
  insc_mun: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
  },
  bairro: {
    type: Sequelize.STRING,
  },
  complemento: {
    type: Sequelize.STRING,
  },
  percentual_imposto: {
    type: Sequelize.REAL,
    allowNull: false,
  },
  quilometragem: {
    type: Sequelize.REAL,
    allowNull: false,
  },
  informacoes_adicionais: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
