import authors from "../models/authors.js";

/**
 * @description https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
 */

async function getAllAuthors() {
  return await authors.findAll();
}

export { getAllAuthors };
