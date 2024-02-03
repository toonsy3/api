// models.js
const { messagesDatabase, DataTypes } = require('./database');

const messagesTable = messagesDatabase.define('messages', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  uuid: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.STRING, allowNull: false },
  server: { type: DataTypes.STRING, allowNull: false },
  timestamp: { type: DataTypes.STRING, allowNull: false }
}, {
  timestamps: false
});

module.exports = { messagesTable };
