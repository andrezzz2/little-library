'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        isbn: 8594318600,
        title: 'Dom Casmurro',
        copies: 4
      },
      {
        isbn: 8576572001,
        title: 'Eu, Robô',
        copies: 5
      },
      {
        isbn: 8576572710,
        title: 'Eu Sou a Lenda',
        copies: 2
      },
      {
        isbn: 8535909559,
        title: 'A revolução dos bichos: Um conto de fadas',
        copies: 9
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};