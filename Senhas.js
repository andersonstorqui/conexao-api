const Sequelize = require("sequelize");
const database = require("./src/database/database")

const Senhas = database.define("Senhas", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    client_id
    nome: {
        type: Sequelize.
    }
})

