export default {
  OK: { statusCode: 200, message: "Ok", name: "OK" },
  CREATED: { statusCode: 201, message: "Criado com sucesso", name: "CREATED" },
  BADREQUEST: {
    statusCode: 400,
    message: "Requisição inválida",
    name: "BADREQUEST",
  },
  ACCEPTED: { statusCode: 202, message: "Aceito", name: "ACCEPTED" },
  NOTFOUND: { statusCode: 404, message: "Não encontrado", name: "NOTFOUND" },
};
