const Empresas = require("../../models/Empresas");
const Read = require("../Read");

class Controller {
  static getAll() {
    const read = Read.readFileSync("./../mock/db.json");
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
