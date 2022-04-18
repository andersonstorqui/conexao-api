const app = require("./app");
// const modelo = require("../src/database/database");
const cors = require("cors");

app.use(cors());

const port = 3080;

app.listen(process.env.PORT || port, () =>
  console.log(`App running on http://localhost:${port}`)
);
