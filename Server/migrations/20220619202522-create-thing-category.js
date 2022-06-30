'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('thingCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thingId:{
        type: Sequelize.INTEGER,
        references:{
          model:'things',
          key:'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'categories',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('thingCategories');
  }
};