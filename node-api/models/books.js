import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

/**
 * @description
 * @example https://www.goodreads.com/list/popular_lists
 */

const Book = sequelize.define(
  "Books",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default Book;
