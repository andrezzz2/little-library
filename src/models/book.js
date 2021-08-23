const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Book = sequelize.define('Book', {
  isbn: {type: DataTypes.INTEGER},
  titulo: {type:DataTypes.STRING},
  numero_serie: {type:DataTypes.INTEGER}
}, {
  sequelize,
  timestamps: false,
  
});

module.exports = Book;