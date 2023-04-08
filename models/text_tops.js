'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class text_tops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  text_tops.init({
    icons: DataTypes.STRING,
    word_one: DataTypes.STRING,
    status: DataTypes.ENUM('Activo', 'Inactivo')
  }, {
    sequelize,
    modelName: 'text_tops',
  });
  return text_tops;
};