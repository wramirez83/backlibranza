'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carouses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  carouses.init({
    user_id: DataTypes.BIGINT,
    section: DataTypes.STRING,
    img: DataTypes.STRING,
    alt: DataTypes.STRING,
    link: DataTypes.STRING,
    position: DataTypes.INTEGER,
    screen: DataTypes.ENUM('desktop', 'mobile'),
    status: DataTypes.ENUM('Activo', 'Inactivo')
  }, {
    sequelize,
    modelName: 'carouses',
  });
  return carouses;
};