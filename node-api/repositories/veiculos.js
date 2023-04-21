import Veiculo from "../models/veiculos.js";
import CustomError from "../routes/errors/customError.js";

import codes from "../routes/errors/codes.js";

const {NOTFOUND} = codes;
/**
 * @description https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
 */

async function findVeiculosAll() {
  return await Veiculo.findAll();
}

async function findVeiculoById(id) {
  const result = await Veiculo.findByPk(id);
  if(!result) throw new CustomError(NOTFOUND);
  return result 
}

async function insertVeiculo(data) {
  return await Veiculo.create({
    placa: data.placa,
    modelo: data.modelo,
    nome: data.nome,
    marca: data.marca,
    whats: data.whats,
    status: data.status,
  });
}

async function updateVeiculo(id, data) {
  let result = await findVeiculoById(id);
  return await result.update({
    placa: data.placa,
    modelo: data.modelo,
    nome: data.nome,
    marca: data.marca,
    whats: data.whats,
    status: data.status,
  })
}

async function deleteVeiculo(id) {
  let result = await findVeiculoById(id);
  return await result.destroy()
}

export { 
  findVeiculosAll, 
  findVeiculoById,
  insertVeiculo, 
  updateVeiculo,
  deleteVeiculo
};
