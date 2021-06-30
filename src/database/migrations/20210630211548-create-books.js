'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      isbn: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      copies: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Books');
  }
};
