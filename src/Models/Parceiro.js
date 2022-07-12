const { DataTypes } = require('sequelize');

const db = require('../db/conn');
const ParceirosAcessos = require('./ParceirosAcessos');

// const Tipo_acesso = require('./Tipo_acesso');

const Parceiro = db.define(
  'tparceiros',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nome_fantasia: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    razao_social: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    cnpj_cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    situacao: {
      type: DataTypes.ENUM('ativo', 'inativo'),
      allowNull: true,
      defaultValue: 'ativo',
    },
    criado_por: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tpessoas',
        key: 'id',
      },
    },
    criado_em: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    alterado_por: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tpessoas',
        key: 'id',
      },
    },
    alterado_em: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    insc_est: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    insc_mun: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    endereco: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tcidade',
        key: 'id',
      },
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'testado',
        key: 'id',
      },
    },
    numero: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    percentual_imposto: {
      type: DataTypes.DECIMAL(15, 5),
      allowNull: true,
      defaultValue: 0.0,
    },
    quilometragem: {
      type: DataTypes.DECIMAL(15, 5),
      allowNull: true,
      defaultValue: 0.0,
    },
    informacoes_adicionais: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: 'tparceiros',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
      {
        name: 'criado_por',
        using: 'BTREE',
        fields: [{ name: 'criado_por' }],
      },
      {
        name: 'alterado_por',
        using: 'BTREE',
        fields: [{ name: 'alterado_por' }],
      },
      {
        name: 'cidade_id',
        using: 'BTREE',
        fields: [{ name: 'cidade_id' }],
      },
      {
        name: 'estado_id',
        using: 'BTREE',
        fields: [{ name: 'estado_id' }],
      },
    ],
  }
);

Parceiro.hasMany(ParceirosAcessos, { as: 'ParceirosAcessos', foreignKey: 'parceiro_id' });
ParceirosAcessos.belongsTo(Parceiro, { as: 'Parceiro', foreignKey: 'parceiro_id' });

module.exports = Parceiro;
