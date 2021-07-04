'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      isbn: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      numero_exemplares: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Books');
  }
};
