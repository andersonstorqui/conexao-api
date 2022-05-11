const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("modelo", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso o sequelize");
} catch (err) {
  console.log(err, "É NÃO FOI");
}

module.exports = sequelize;
