'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class automoviles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  automoviles.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    anio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'automoviles',
  });
  return automoviles;
};