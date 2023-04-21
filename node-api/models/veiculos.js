import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

/**
 * @description
 * @example https://www.goodreads.com/list/popular_lists
 */

const Veiculo = sequelize.define(
  "Veiculos",
  {
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      // Recebido - 0
      // Iniciado - 1
      // Aguardando - 2
      // Finalizado - 3
      values: [0, 1, 2, 3],
      defaultValue: 0
      // allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

export default Veiculo;
