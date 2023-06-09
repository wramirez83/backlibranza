'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  testimonials.init({
    user_id: DataTypes.INTEGER,
    testimony: DataTypes.STRING,
    status: DataTypes.ENUM('Activo', 'Inactivo')
  }, {
    sequelize,
    modelName: 'testimonials',
  });
  return testimonials;
};