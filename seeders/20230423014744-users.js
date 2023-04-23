'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      full_name: 'Wilson Ramirez Zuluaga',
      email: 'wilson@gmail.com',
      password : '$2y$10$HYLJ6nnggcJPpUmD/8rjb.oHSG9jnvXt/NeDV5AuNa2KUwwaSnu8u',
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
