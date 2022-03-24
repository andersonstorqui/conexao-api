const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();
const mock = require("../mock/db.json");
const Read = require("../controllers/Read");
const { readFileSync } = require("../controllers/Read");

router.get("/clientes", (req, res) => {
  if (req.length !== 0) {
    const data = controller.getAll();
    const gerandoId = require("shortid");
    //
    res.status(200).json(data);
  } else {
    res.status(200).json([]);
  }
});
router.post("/clientes", (req, res) => {
  if (Object.keys(req.body).length !== 0) {
    const data = controller.create(req.body);
    res.status(201).json(data);
  } else {
    res.status(200).json([]);
  }
});

router.get("/validatetoken", (req, res) => {
  let tokenValidate = req.query["token"];

  res.send(tokenValidate);
});

router.delete("/cliente/:id", (req, res) => {
  const id = req.params.id;
  if (id !== 0) {
    if (typeof id == Number) {
      console.log("não é numero");
      res.sendStatus(400);
    } else {
      const idTratado = Number(id);
      const index = mock.Empresas.findIndex(
        (cliente) => cliente._nome.id == idTratado
      );

      if (index == -1) {
        console.log("indice menos um");
        res.sendStatus(400);
      } else {
        console.log(mock.Empresas.splice(index, 1));
        console.log("acho que foi");

        mock.Empresas.splice(index, 1);
        readFileSync();

        //const convertendoEmJsParaExcluirIndice = JSON.parse(mock);
        // convertendoJsonEmJsParaExcluirIndice.

        //const convertendoEmJson = JSON.stringify(
        //convertendoJsonEmJsParaExcluirIndice
        //);
        res.sendStatus(200);
      }
    }
  } else {
    res.sendStatus(400);
  }
});

// router.get("/", (req, res) => {
//aqui devo fazer a validação do token no banco de dados com sequelize, e
//para enviar do front end para ca, devo fazer um metodo post no front
//com direcionamento para essa rota, ja verificado se existe token ou não
// }

module.exports = router;
