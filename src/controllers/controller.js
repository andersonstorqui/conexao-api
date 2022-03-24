const db = require("./../mock/db.json");
const Empresas = require("../models/Empresas");
const { readFileSync } = require("../controllers/Read");

class Controller {
  static getAll() {
    const read = readFileSync("./src/mock/db.json");
    const data = JSON.parse(read);

    return data;
  }
  static create(data) {
    const newEmpresa = new Empresas(data);
    newEmpresa.save();
    return newEmpresa;
  }
}

module.exports = Controller;
