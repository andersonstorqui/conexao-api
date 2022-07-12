const { Router } = require('express');
const router = Router();
const Parceiro = require('../Models/Parceiro');
const Acesso = require('../Models/Acesso');
const Tipo_acesso = require('../Models/Tipo_acesso');
const ParceirosAcessos = require('../Models/ParceirosAcessos');

module.exports = router;

// ROTAS TABELA PARCEIRO
router.get(`/clientes`, async (req, res) => {
  const user = await Parceiro.findAll();
  res.send(user);
  res.status(200);
  //AQUI MOSTRAR NA TELA QUANDO REQUISITADO=ok
});

router.get('/clientes:?', async (req, res) => {
  console.log(req.query);

  //MOSTRAR NA TELA QUANDO REQUISITADO, COLOCAR RESPOSTA HTTP=ok
});
//////////////////////////////////////
//teste de query
router.get('/user:?', function userIdHandler(req, res) {
  console.log(req.query);
  res.send('GET');
});
//////////////////////////////////////

router.get('/clientes/:id', async (req, res) => {
  const id = req.params;
  const user = await Parceiro.findOne({
    where: { id: id.id },
    include: [{ model: ParceirosAcessos, as: 'ParceirosAcessos' }],
    raw: false,
  });
  res.send(user);
  res.status(200);
});

// router.post('/clientes', (req, res) => {
//   const nome_fantasia = req.body.nome_fantasia;
//   const cnpj_cpf = req.body.cnpj_cpf;
//   const informacoes_adicionais = req.body.informacoes_adicionais;
//   try {
//     Parceiro.create({ nome_fantasia, cnpj_cpf, informacoes_adicionais });
//     res.status(201);
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.put('/clientes/:id', async (req, res) => {
//   const id = req.params.id;
//   const nome_fantasia = req.body.nome_fantasia;
//   const cnpj_cpf = req.body.cnpj_cpf;
//   const informacoes_adicionais = req.body.informacoes_adicionais;

//   const userData = {
//     id: id,
//     nome_fantasia: nome_fantasia,
//     cnpj_cpf: cnpj_cpf,
//     informacoes_adicionais: informacoes_adicionais,
//   };

//   await Parceiro.update(userData, { raw: true, where: { id: id } });

//   // AQUI FAZER TELA DE UPDATE, RESPOSTA HTTP
// });

//ROTAS ACESSO

router.post('/acesso', async (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  const host = req.body.host;
  const observacao = req.body.observacao;
  const ParceiroId = req.body.ParceiroId;

  const acesso = {
    ParceiroId: ParceiroId,
    usuario: usuario,
    senha: senha,
    host: host,
    observacao: observacao,
  };

  try {
    await Acesso.create(acesso);
    res.status(201);
  } catch (err) {
    console.log(err);
  }

  //FAZER TELA DE ENVIAR DADOS DE ACESSO
});

router.put('/acesso/:id', async (req, res) => {
  const id = req.params.id;
  // const nome_fantasia = req.body.nome_fantasia;
  // const cnpj_cpf = req.body.cnpj_cpf;
  // const informacoes_adicionais = req.body.informacoes_adicionais;
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  const host = req.body.host;
  const observacao = req.body.observacao;
  const ParceiroId = req.body.ParceiroId;

  const userData = {
    // nome_fantasia: nome_fantasia,
    // cnpj_cpf: cnpj_cpf,
    // informacoes_adicionais: informacoes_adicionais,
    usuario: usuario,
    senha: senha,
    host: host,
    observacao: observacao,
    ParceiroId: ParceiroId,
  };

  await Acesso.update(userData, { raw: true, where: { id: id } });

  res.send(userData);
  res.status(200);
});

router.get('/acesso', async (req, res) => {
  const user = await Acesso.findAll();
  res.send(user);
  res.status(200);
  //AQUI MOSTRAR NA TELA QUANDO REQUISITADO=ok
});

router.get('/acesso/:id', async (req, res) => {
  const id = req.params.id;
  const user = await Acesso.findOne({ raw: true, where: { id: id } });
  console.log(user);
  res.send(user);
  res.status(200);
  // AQUI RENDERIZAR TELA DE EDIT
});

//ROTAS TIPO_ACESSO

router.post('/service', async (req, res) => {
  const servico = req.body.servico;
  // const descricao = req.body.descricao;
  // const ativo = req.body.ativo;

  const serviceData = {
    servico: servico,
    // descricao: descricao,
    // ativo: ativo,
  };

  await Tipo_acesso.create(serviceData);

  res.send(serviceData);
  res.status(200);
});

router.get('/service', async (req, res) => {
  const service = await Tipo_acesso.findAll();
  res.send(service);
  res.status(200);
  // RESPOSTA HTTP, RENDERIZAR TELA DE CADASTRO SERVICE
});

router.get('/service/:id', async (req, res) => {
  const id = req.params.id;
  const service = await Tipo_acesso.findOne({ raw: true, where: { id: id } });

  res.send(service);
  res.status(200);
  // AQUI RENDERIZAR UNICO PARCEIRO
});

// CRUD

//TENHO QUE FAZER CRUD DE
//ACESSOS=OK
//PARCEIROS=PL
//PARCEIROS ACESSOS=FALTA METODO PUT

//FAZER ROTA QUE RECEBA, UM UNICO ID, NOME OU CNPJ,CPF
//METODO GET
//FAZER A REQUISIÇÃO DE
//NOME
//CNPJ/CPF
//ID

//CONECTAR COM SEQUELIZE AS ROTAS E FAZER UM <>res.send</>
