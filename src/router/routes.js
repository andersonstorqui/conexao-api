const { Router } = require("express");
const router = Router();
const Empresas = require("./../models/Empresas");
const Parceiro = require("../Models/Parceiro");

module.exports = router;

router.get("/clientes", async (req, res) => {
  try {
    const user = await Parceiro.findAll();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
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
