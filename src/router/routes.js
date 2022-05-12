const { Router } = require("express");
const router = Router();
// const Empresas = require("./../models/Empresas");
const Parceiro = require("../Models/Parceiro");
const Acesso = require("../Models/Acesso");
const Tipo_acesso = require("../Models/Tipo_acesso");

module.exports = router;

// ROTAS TABELA PARCEIRO
router.get("/clientes", async (req, res) => {
  const user = await Parceiro.findAll();
  res.send(user);
  res.status(200);
  //AQUI MOSTRAR NA TELA QUANDO REQUISITADO=ok
});

router.get("cliente/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Parceiro.findOne({ raw: true, where: { id: id } });
  console.log(user);
  //MOSTRAR NA TELA QUANDO REQUISITADO, COLOCAR RESPOSTA HTTP
});

router.post("/clientes", (req, res) => {
  const nome_fantasia = req.body.nome_fantasia;
  const cnpj_cpf = req.body.cnpj_cpf;
  const informacoes_adicionais = req.body.informacoes_adicionais;
  try {
    Parceiro.create({ nome_fantasia, cnpj_cpf, informacoes_adicionais });
    res.status(201);
  } catch (err) {
    console.log(err);
  }
});

router.post("/update", async (req, res) => {
  const id = req.params.id;
  const nome_fantasia = req.body.nome_fantasia;
  const cnpj_cpf = req.body.cnpj_cpf;
  const informacoes_adicionais = req.body.informacoes_adicionais;

  const userData = {
    id: id,
    nome_fantasia: nome_fantasia,
    cnpj_cpf: cnpj_cpf,
    informacoes_adicionais: informacoes_adicionais,
  };

  await Parceiro.update(userData, { raw: true, where: { id: id } });

  // AQUI FAZER TELA DE UPDATE, RESPOSTA HTTP
});

//ROTAS ACESSO

router.post("/acesso/create", async (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  const host = req.body.host;
  const observacao = req.body.observacao;

  const acesso = {
    usuario: usuario,
    senha: senha,
    host: host,
    observacao: observacao,
  };

  await Acesso.create(acesso);

  //FAZER TELA DE ENVIAR DADOS DE ACESSO
});

router.get("/acesso/edit/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Acesso.findOne({ include: Acesso, where: { id: id } });

  // AQUI RENDERIZAR TELA DE EDIT
});

//ROTAS TIPO_ACESSO

router.post("/service", async (req, res) => {
  const servico = req.body.servico;
  const descricao = req.body.descricao;
  const ativo = req.body.ativo;

  const serviceData = {
    servico: servico,
    descricao: descricao,
    ativo: ativo,
  };

  await Tipo_acesso.create(serviceData);

  // PAGINA DE CADASTRO SERVICE
});

router.get("/service", async (req, res) => {
  const service = await Tipo_acesso.findAll();
  console.log(service);
  // RESPOSTA HTTP, RENDERIZAR TELA DE CADASTRO SERVICE
});

router.get("/service/:id", async (req, res) => {
  const id = req.params.id;
  const service = await Tipo_acesso.findOne({ raw: true, where: { id: id } });
  console.log(service);

  // AQUI RENDERIZAR UNICO PARCEIRO
});
