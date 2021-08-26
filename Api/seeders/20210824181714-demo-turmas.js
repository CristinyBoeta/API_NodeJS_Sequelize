'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Turmas', [
        {
          data_inicio: '2020-07-01',
          nivel_id: 3,
          docente_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        data_inicio: '2021-09-01',
        nivel_id: 2,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Turmas', null, {});
  }
};
