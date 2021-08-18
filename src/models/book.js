const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Book = sequelize.define('Book', {
  isbn: {type: DataTypes.INTEGER, primaryKey: true},
  titulo: {type:DataTypes.STRING},
  numero_exemplares: {type:DataTypes.INTEGER},
  numero_serie: {type:DataTypes.INTEGER}
}, {
  sequelize,
  timestamps: false,
  
});

module.exports = Book;