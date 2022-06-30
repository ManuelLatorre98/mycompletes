const Sequelize= require('sequelize')
const config= require('../config/config').development
const db={}

const sequelize = new Sequelize(config.dev.database, config.dev.username,config.dev.password, config)

function test(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

db.sequelize=sequelize
module.exports=db;


