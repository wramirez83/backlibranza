'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:  */
     await queryInterface.bulkInsert('text_tops', [{
        icons: 'me-gusta.png',
        word_one: 'prestamos a pensionados reportados',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
