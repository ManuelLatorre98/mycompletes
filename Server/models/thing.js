'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class thing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      thing.belongsToMany(user, {through: 'userThings'})
      thing.belongsToMany(category, {through: 'thingCategories'})
    }
  }
  thing.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    calification: DataTypes.INTEGER,
    plataformLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'thing',
  });
  return thing;
};