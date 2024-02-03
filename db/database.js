const { database } = require("../config/config.json")
const { Sequelize, DataTypes } = require('sequelize');

const messagesDatabase = new Sequelize(database.database, database.username, database.password, {
  host: database.address,
  dialect: database.dialect,
  port: database.port
});

module.exports = { messagesDatabase, DataTypes };