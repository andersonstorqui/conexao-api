(async () => {
  const database = require("./src/database/database");

  const Senha = require("./src/database/Models/Senhas");

  const Parceiro = require("./src/database/Models/Parceiro");

  try {
    Parceiro.hasMany(Senha, {
      foreignKey: "idParceiro",
    });
    Senha.belongsTo(Parceiro, {
      constraint: true,

      foreignKey: "idParceiro",
    });
    const resultado = await database.sync({ force: true });

    //CREATE
    const resultadoParceiro = await Parceiro.create({
      nome_fantasia: "",
      razao_social: "",
      cnpj_cpf: 0,
      situacao: false,
      criado_por: 0,
      alterado_por: 0,
      insc_est: "",
      insc_mun: "",
      endereco: "",
      bairro: "",
      complemento: "",
      percentual_imposto: 0,
      quilometragem: 0,
      informacoes_adicionais: "",
    });
    //READ
    const senha = await Senha.findByPk(resultadoParceiro.id, {
      include: Parceiro,
    });
    // console.log(senha)
    const parceiroBusca = await senha.getParceiro();

    // console.log(parceiroBusca)

    //UPDATE

    // const senha = await Senha.findByPk(resultadoParceiro.id, {
    // include: Parceiro,
    // });
    // const parceiroBusca = await senha.getParceiro();

    // parceiroBusca.Parceiro.nome_fantasia = "Jogo da velha"

    //DELETE
    // const senha = await Senha.findByPk(resultadoParceiro.id, {
    // include: Parceiro,
    // });
    // const parceiroBusca = await senha.getParceiro();
    //  parceiroBusca.destroy()
  } catch (error) {
    console.log(error);
  }
})();
