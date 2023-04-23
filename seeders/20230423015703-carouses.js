'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carouses', [{
      user_id: 1,
      section: 'home',
      img : 'banner-ppal.png',
      alt: 'Libranza Oportunidades',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      section: 'free',
      img : 'banner-credito-libranza.png',
      alt: 'Libranza Oportunidades',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      section: 'foryou',
      img : 'banner-foryou.png',
      alt: 'Para ti libranza',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('carouses', null, {});
  }
};
