import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/db.sqlite",
  /**
   * @see https://sequelize.org/docs/v6/getting-started/#logging
   */
  logging: console.log,
});

export default sequelize;
