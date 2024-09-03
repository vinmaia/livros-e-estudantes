const livro = require("../controllers/livro.js");
const estudante = require("../controllers/estudante.js");
let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    livro.show(body.livro_id) &&
    estudante.show(body.estudante_id) &&
    body.dataAluguel != undefined &&
    body.dataAluguel != "" &&
    body.dataDevolucao != undefined &&
    body.dataDevolucao != ""
  ) {
    return {
      id,
      livro: body.livro_id,
      estudante: body.estudante_id,
      alugado: body.dataAluguel,
      devolução: body.dataDevolucao,
    };
  }
};

module.exports = model