const db = require("./../mock/db.json");
const Write = require("../controllers/Write");
const { readFileSync } = require("fs");

class Empresas {
  constructor(
    nome,
    TS1,
    TS2,
    BancoOracleProd,
    BancoOracleTeste,
    FocoERPProd,
    FocoERPTeste
  ) {
    this._nome = nome;
    // this._id = this.getMaxId() + 1;
    this._TS1 = TS1;
    this._TS2 = TS2;
    this._BancoOracleProd = BancoOracleProd;
    this._BancoOracleTeste = BancoOracleTeste;
    this._FocoERPProd = FocoERPProd;
    this._FocoERPTeste = FocoERPTeste;
  }

  set TS1({ novoValor }) {
    this.TS1.ipInternoTS1 = novoValor;
    this.TS1.ipExternoTS1 = novoValor;
    this.TS1.usuarioTS1 = novoValor;
    this.TS1.usuario2TS1 = novoValor;
    this.TS1.usuario3TS1 = novoValor;
    this.TS1.senhaTS1 = novoValor;
  }

  set TS2(novoValor) {
    {
      this.TS2.ipInternoTS2 = novoValor;
      this.TS2.ipExternoTS2 = novoValor;
      this.TS2.usuarioTS2 = novoValor;
      this.TS2.senhaTS2 = novoValor;
    }
  }

  set BancoOracleProd(novoValor) {
    {
      this.BancoOracleProd.ipBancoProd = novoValor;
      this.BancoOracleProd.usuarioBancoProd = novoValor;
      this.BancoOracleProd.senhaBancoProd = novoValor;
    }
  }

  set BancoOracleTeste(novoValor) {
    {
      this.BancoOracleTeste.ipBancoTeste = novoValor;
      this.BancoOracleTeste.usuarioBancoTeste = novoValor;
      this.BancoOracleTeste.senhaBancoTeste = novoValor;
    }
    novoValor;
  }

  set FocoERPProd(novoValor) {
    {
      this.FocoERPProd.ipFocoProd = novoValor;
      this.FocoERPProd.usuarioFocoProd = novoValor;
      this.FocoERPProd.senhaFocoProd = novoValor;
    }
  }
  set FocoERPTeste(novoValor) {
    {
      this.FocoERPTeste.ipFocoTeste = novoValor;
      this.FocoERPTeste.usuarioFocoTeste = novoValor;
      this.FocoERPTeste.senhaFocoTeste = novoValor;
    }
  }

  // getMaxId() {
  //   let maxId = 0;
  //   db.Empresas.forEach((empresa) => {
  //     if (empresa.id > maxId) {
  //       maxId = empresa.id;
  //     }
  //   });
  //   return maxId;
  // }

  save() {
    const read = readFileSync("./src/mock/db.json");
    const data = JSON.parse(read);

    data.Empresas.push(this);

    Write.WriteData(data);
  }
}

module.exports = Empresas;
