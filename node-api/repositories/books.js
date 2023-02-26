import books from "../models/books.js";

/**
 * @description https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
 */

async function getAllBooks() {
  return await books.findAll();
}

export { getAllBooks };
