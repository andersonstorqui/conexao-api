const express = require("express");
const router = require("./router/routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/mv", router);

module.exports = app;
