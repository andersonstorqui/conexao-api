(async () => {
  const database = require("./src/database/database");
  const Senha = require("./src/database/Models/Senhas");

  try {
    const resultado = await database.sync();
    // CREATED
    const resultadoCreate = await Senha.create({
      name: "Lidio Carraro",
      host: "oracle",
      usuario: "focco3i",
      senha: "VERSION",
      observacoes: "",
    });
    // READ
    const clientes = await Senha.findAll();
    // console.log(clientes);
    // UPDATE
    // const cliente = await Senha.findAll(1);
    // cliente.name = "hello World";
    // const resultadoSave = await cliente.save();
    // DELETE
    // const produto = await Senha.findByPk();
    // produto.destroy();
  } catch (error) {
    console.log(error);
  }
})();
