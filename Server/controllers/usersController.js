const { trusted } = require("mongoose")
const {hashPassword, comparePassword} = require('../auth/hashPassword')
const {createUser} = require('../services/usersService')
module.exports = {
  async register(req,res){
    try{
      const {email, nickName, password, dateBorn} =req.body
      const encryptedPassword = await hashPassword(password)
      const newData= {email,nickName,encryptedPassword,dateBorn}
      createUser(newData)
      
      //mensaje al servicio
      
      res.send("EO")
    }catch(err){
      console.log(`Register Error: ${err.message}`)
      res.status(500).json({ok:false, error: err.message})
    }
  }
}