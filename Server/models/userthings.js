'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userThings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userThings.init({
    userId: DataTypes.INTEGER,
    thingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userThings',
  });
  return userThings;
};