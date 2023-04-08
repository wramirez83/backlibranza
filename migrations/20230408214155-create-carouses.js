'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model: { tableName: 'users'},
          key: 'id'
        },
        allowNull: false
      },
      section: {
        type: Sequelize.STRING(255)
      },
      img: {
        type: Sequelize.STRING(255)
      },
      alt: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      link: {
        type: Sequelize.STRING(255),
        defaultValue: '#'
      },
      position: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      screen: {
        type: Sequelize.ENUM('desktop', 'mobile'),
        defaultValue: 'desktop'
      },
      status: {
        type: Sequelize.ENUM('Activo', 'Inactivo'),
        defaultValue: 'Activo'
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
    await queryInterface.dropTable('carouses');
  }
};