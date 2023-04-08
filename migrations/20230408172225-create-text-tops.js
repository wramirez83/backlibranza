'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('text_tops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      icons: {
        type: Sequelize.STRING(50)
      },
      word_one: {
        type: Sequelize.STRING(50)
      },
      status: {
        type: Sequelize.ENUM('Activo', 'Inactivo'),
        defaultValue: 'Activo',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('text_tops');
  }
};