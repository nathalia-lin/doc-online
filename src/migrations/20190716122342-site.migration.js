'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('site', [{
      id: '1f0560e8-8fa3-489f-a63e-76fcc21d9bb8',
      parentId: '68b8addb-fed2-433e-a887-9fb448edf3e2',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
      logo: '123',
      networkId: 'MODELO1',
      cnpj: '123',
      name: 'SITE1',
      addressId: '68b8addb-fed2-433e-a887-9fb448edf3e2'
    }, {
      id: '325565db-87dc-4cdd-8512-07f599b29fb6',
      parentId: '1c793b1c-db1f-442c-9f1d-e2f8aaee337c',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
      logo: '123',
      networkId: 'MODELO2',
      cnpj: '123',
      name: 'SITE2',
      addressId: '1c793b1c-db1f-442c-9f1d-e2f8aaee337c'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('site', null, {});
  }
};
