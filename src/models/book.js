module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    isbn: {type: DataTypes.INTEGER, primaryKey: true},
    title: DataTypes.STRING,
    copies: DataTypes.INTEGER
  }, {
    timestamps: false,
    
  });

  return Book;
}
