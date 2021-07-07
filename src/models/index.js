const Sequelize = require('sequelize');
const config = require('../config/database.js');

module.exports = new Sequelize(config);