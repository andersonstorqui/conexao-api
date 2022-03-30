// const Controller = require("../controllers/controller");
const { Router } = require("express");
const router = Router();
const mock = require("../mock/db.json");
const Write = require("../controllers/Write");
const fs = require("fs");
const { readFileSync } = require("fs");
const Empresas = require("./../models/Empresas");

router.get("/clientes", (req, res) => {
  if (req.length !== 0) {
    const read = readFileSync("./src/mock/db.json");
    const data = JSON.parse(read);
    // const gerandoId = require("shortid");
    //
    res.status(200).json(data);
  } else {
    res.status(200).json([]);
  }
});

router.post("/clientes", (req, res) => {
  if (Object.keys(req.body).length !== 0) {
    const newEmpresa = new Empresas(req.body);
    newEmpresa.save();
    res.status(201).json(req.body);
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
    const transformandoEmNumber = parseInt(id);

    if (
      typeof transformandoEmNumber === undefined ||
      typeof transformandoEmNumber === null
    ) {
      res.sendStatus(400);
    } else {
      const idTratado = Number(id);
      const index = mock.Empresas.findIndex(
        (cliente) => cliente._nome.id == idTratado
      );
      if (index == -1) {
        res.sendStatus(400);
      } else {
        try {
          const lendoMock = fs.readFileSync("./src/mock/db.json");
          const newArray = lendoMock.toString();

          const objetoJS = JSON.parse(newArray);

          objetoJS.Empresas.splice(index, 1);

          // const objetoJson = JSON.stringify(objetoJS, null, 2);

          Write.WriteData(objetoJS);
          res.sendStatus(200);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});

// METODO PUT

router.put("/clientes/:id", (req, res) => {
  const id = req.params.id;
  const lendoMock = fs.readFileSync("./src/mock/db.json");
  const bufferBancoDados = lendoMock.toString();
  const objetoJS = JSON.parse(bufferBancoDados);

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    const iDObjetoPut = objetoJS.Empresas.find((cliente) => {
      return cliente._nome.id == id;
    });

    if (req.body._nome.name) {
      iDObjetoPut._nome.name = req.body._nome.name;
    }
    if (req.body._nome.ipInternoTS1) {
      iDObjetoPut._nome.ipInternoTS1 = req.body._nome.ipInternoTS1;
    }
    if (req.body._nome.ipExternoTS1) {
      iDObjetoPut._nome.ipExternoTS1 = req.body._nome.ipExternoTS1;
    }
    if (req.body._nome.usuarioTS1) {
      iDObjetoPut._nome.usuarioTS1 = req.body._nome.usuarioTS1;
    }
    if (req.body._nome.senhaTS1) {
      iDObjetoPut._nome.senhaTS1 = req.body._nome.senhaTS1;
    }
    if (req.body._nome.ipInternoTS2) {
      iDObjetoPut._nome.ipInternoTS2 = req.body._nome.ipInternoTS2;
    }
    if (req.body._nome.ipExternoTS2) {
      iDObjetoPut._nome.ipExternoTS2 = req.body._nome.ipExternoTS2;
    }
    if (req.body._nome.usuarioTS2) {
      iDObjetoPut._nome.usuarioTS2 = req.body._nome.usuarioTS2;
    }
    if (req.body._nome.senhaTS2) {
      iDObjetoPut._nome.senhaTS2 = req.body._nome.senhaTS2;
    }
    if (req.body._nome.ipBancoProd) {
      iDObjetoPut._nome.ipBancoProd = req.body._nome.ipBancoProd;
    }
    if (req.body._nome.usuarioBancoProd) {
      iDObjetoPut._nome.usuarioBancoProd = req.body._nome.usuarioBancoProd;
    }
    if (req.body._nome.senhaBancoProd) {
      iDObjetoPut._nome.senhaBancProd = req.body._nome.senhaBancoProd;
    }
    if (req.body._nome.hostBancoProd) {
      iDObjetoPut._nome.hostBancoProd = req.body._nome.hostBancoProd;
    }
    if (req.body._nome.portaBancoProd) {
      iDObjetoPut._nome.portaBancoProd = req.body._nome.portaBancoProd;
    }
    if (req.body._nome.ssidBancoProd) {
      iDObjetoPut._nome.ssidBancoProd = req.body._nome.ssidBancoProd;
    }
    if (req.body._nome.ipBancoTeste) {
      iDObjetoPut._nome.ipBancoTeste = req.body._nome.ipBancoTeste;
    }
    if (req.body._nome.usuarioBancoTeste) {
      iDObjetoPut._nome.usuarioBancoTeste = req.body._nome.usuarioBancoTeste;
    }
    if (req.body._nome.senhaBancoTeste) {
      iDObjetoPut._nome.senhaBancoTeste = req.body._nome.senhaBancoTeste;
    }
    if (req.body._nome.hostBancoTeste) {
      iDObjetoPut._nome.hostBancoTeste = req.body._nome.hostBancoTeste;
    }
    if (req.body._nome.portaBancoTeste) {
      iDObjetoPut._nome.portaBancoTeste = req.body._nome.portaBancoTeste;
    }
    if (req.body._nome.ssidBancoTeste) {
      iDObjetoPut._nome.ssidBancoTeste = req.body._nome.ssidBancoTeste;
    }
    if (req.body._nome.ipFocoProd) {
      iDObjetoPut._nome.ipFocoProd = req.body._nome.ipFocoProd;
    }
    if (req.body._nome.usuarioFocoProd) {
      iDObjetoPut._nome.usuarioFocoProd = req.body._nome.usuarioFocoProd;
    }
    if (req.body._nome.senhaFocoProd) {
      iDObjetoPut._nome.senhaFocoProd = req.body._nome.senhaFocoProd;
    }
    if (req.body._nome.ipFocoTeste) {
      iDObjetoPut._nome.ipFocoTeste = req.body._nome.ipFocoTeste;
    }
    if (req.body._nome.usuarioFocoTeste) {
      iDObjetoPut._nome.usuarioFocoTeste = req.body._nome.usuarioFocoTeste;
    }
    if (req.body._nome.senhaFocoTeste) {
      iDObjetoPut._nome.senhaFocoTeste = req.body._nome.senhaFocoTeste;
    }

    let arrayDeObjetosPut = { ...iDObjetoPut };

    console.log(arrayDeObjetosPut);

    // for (let objeto in iDObjetoPut) {
    //
    // }
    // fs.writeFileSync(
    //   "./src/mock/db.json",
    //   JSON.stringify({ ...objetoJS[objeto] }, null, 2),
    //   "utf-8"
    // );
  }
});

//achar id para alterar no array, objeto atualizado
//pego requisição feita pelo cliente
//valido alguns campos
//atribuo ao lendoMock
//escrevo com writefilesync com spread operator juntando resto dos objetos
//faço spread com chaves

/////////////////////////////////////////////////**********************************************----------------------- */
// router.get("/", (req, res) => {
//aqui devo fazer a validação do token no banco de dados com sequelize, e
//para enviar do front end para ca, devo fazer um metodo post no front
//com direcionamento para essa rota, ja verificado se existe token ou não
// }

module.exports = router;
