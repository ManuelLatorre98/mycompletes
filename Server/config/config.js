const dotenv= require('dotenv').config();

module.exports={
    dev:{
        NODE_ENV: process.env.NODE_ENV,
        HOST: process.env.HOST,
        PORT: process.env.PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        TOKEN_LIFE: process.env.TOKEN_LIFE,
        dialect: 'mysql' 
    },

    tokenSecret: {
        SECRET: 'myCompletes-api'
    }

}