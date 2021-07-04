'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        isbn: 8594318600,
        titulo: 'Dom Casmurro',
        numero_exemplares: 4
      },
      {
        isbn: 8576572001,
        titulo: 'Eu, Robô',
        numero_exemplares: 5
      },
      {
        isbn: 8576572710,
        titulo: 'Eu Sou a Lenda',
        numero_exemplares: 2
      },
      {
        isbn: 8535909559,
        titulo: 'A revolução dos bichos: Um conto de fadas',
        numero_exemplares: 9
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
