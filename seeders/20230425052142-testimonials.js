'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('testimonials', [{
      user_id: 1,
      testimony: 'Mi nombre es Bibiana Andrea Rojas pensionada de protección, tengo dos créditos con Libranza oportunidades; el primero me sirvio para darle la carrera de veterinaria a mi hija, y el segundo crédito que solicité fue para pagar una deuda. En realidad el dinero fue desembolsado muy rápido, en 4 días ya lo tenía en mi cuenta. Me parece excelente la atención, como cliente de Libranza oportunidades lo recomiendo 100%',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      testimony: 'Mi nombre es Martha Cecilia Marín, pensionada de Colpensiones adquirí un crédito con Libranza Oportunidades para poder unificar todas mis deudas y me dieron grandísimas oportunidades para poder salir adelante. Los recomiendo por su calidad humana, atención y la facilidad a la hora de obtener un crédito.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      testimony: 'Mi nombre es Gloria Helena jimenez, pensionada de Colpensiones, gracias al crédito que solicité con Libranza Oportunidades he podido cubrir necesidades de mi hogar y mi familia. los recomiendo porque la calidad de los asesores es excelente.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('testimonials', null, {});
  }
};
