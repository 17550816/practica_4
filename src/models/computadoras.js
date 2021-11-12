'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class computadoras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  computadoras.init({
    marca: DataTypes.STRING,
    cpu: DataTypes.STRING,
    ram: DataTypes.STRING,
    hdd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'computadoras',
  });
  return computadoras;
};