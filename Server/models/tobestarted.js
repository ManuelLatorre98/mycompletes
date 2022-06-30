'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class toBeStarted extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  toBeStarted.init({
    estimatedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'toBeStarted',
  });
  return toBeStarted;
};