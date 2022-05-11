const app = require("./app");

const cors = require("cors");

app.use(cors());
const conn = require("../src/db/conn");

const Acesso = require("../src/Models/Acesso");
const Parceiro = require("../src/Models/Parceiro");
const Tipo_acesso = require("../src/Models/Tipo_acesso");

const port = 3000;

conn
  .sync()
  // .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server rodando lisinho na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));
