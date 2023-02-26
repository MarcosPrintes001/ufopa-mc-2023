import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

/**
 * @description
 * @example https://www.goodreads.com/list/popular_lists
 */

const Author = sequelize.define(
  "Author",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default Author;
