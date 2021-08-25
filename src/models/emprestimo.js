const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Emprestimo = sequelize.define('Emprestimo', {
  email: {type: DataTypes.STRING},
  isbn: {type:DataTypes.INTEGER},
  numero_serie: {type:DataTypes.INTEGER}
  
}, {
  sequelize,
  timestamps: true,
  
});

module.exports = Emprestimo;