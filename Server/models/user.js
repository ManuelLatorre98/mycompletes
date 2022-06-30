'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(thing,{through:'userThings'})
    }
  }
  user.init({
    email: DataTypes.STRING,
    nickName: DataTypes.STRING,
    password: DataTypes.STRING,
    dateBorn: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};