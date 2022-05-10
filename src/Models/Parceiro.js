const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const tipo_acesso = require("./Tipo_acesso");

const Parceiro = db.define("tParceiro", {
  nome_fantasia: {
    type: DataTypes.STRING,
    required: true,
  },
  cnpj_cpf: {
    type: DataTypes.INTEGER,
    required: true,
  },
  informacoes_adicionais: {
    type: DataTypes.STRING,
  },
});

module.exports = Parceiro;
/*  
    id;V
    nome fantasia;V
    cnpj_cpf;V
    informações adicionais;V

    primary key(id)
        *criado_por
        *alterado_por
        * cidade_id
        * estado_id
    constraint
        *(criado por) referencia (tpessoas(id))
        *(alteradp por) referencia (tpessoas(id))
        * (cidade_id) referencia (tcidade(id))
        * (estado_id) referencia (testado(id))
*/
