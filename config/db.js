const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "dimpl.sqlite3",
});

module.exports = db;