module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    isbn: {type: DataTypes.INTEGER, primaryKey: true},
    titulo: DataTypes.STRING,
    numero_exemplares: DataTypes.INTEGER
  }, {
    timestamps: false,
    
  });

  return Book;
}
