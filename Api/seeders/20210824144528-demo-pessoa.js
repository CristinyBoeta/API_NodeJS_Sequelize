'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Carla',
        ativo: true,
        email: 'carla@john.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Maria',
        ativo: true,
        email: 'maria@john.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'José',
        ativo: true,
        email: 'jose@john.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
