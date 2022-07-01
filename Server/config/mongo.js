const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI= process.env.DB_URI
    const db = mongoose.connect(DB_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    }, (err, res) => {
      if(!err){
        console.log('CONECTION TO MONGODB SUCCESFULL')
      }else{
        console.log('CONECTION TO MONGODB ERROR')
      }
    })
  }


module.exports = { dbConnect }