const mongoose = require('mongoose')

const dbConnect = () => {
  try{
    const DB_URI= process.env.DB_URI
    console.log(DB_URI)
    const db = mongoose.connect(DB_URI)
    console.log("CONECTION TO MONGODB SUCCESFULL")
  }catch (error){
    console.error(error)
  } 
  }

module.exports={dbConnect}