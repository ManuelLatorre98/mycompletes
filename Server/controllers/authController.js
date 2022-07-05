const { trusted } = require("mongoose")
const {hashPassword, comparePassword} = require('../auth/hashPassword')
const {createUser} = require('../services/authService')
const usersModel= require('../models/user')

const {generateToken, clearData} = require('../helpers/authHelper')
module.exports = {
  async register(req,res){
    try{
      const {email, nickName, password, dateBorn} =req.body
      const encryptedPassword = await hashPassword(password)
      const newData= {email,nickName,password:encryptedPassword,dateBorn}
      const newUser= await createUser(newData)
      const token= generateToken(newUser)
      const dataUser = clearData(newUser, token)
      res.status(200).json(dataUser)
    }catch(err){
      console.log(`Register Error: ${err.message}`)
      res.status(500).json({ok:false, error: err.message})
    }
  },

  async login(req,res){
    const {userLogin, password} = req.body
    const user = await usersModel.find({$or: [{"email" : userLogin}, {"nickName": userLogin}]})
    const passwordMatch = await comparePassword(password, user[0].password)
    if(passwordMatch){
      token= generateToken(user[0])
      const dataUser= clearData(user[0], token)
      res.status(200).json(dataUser)
    }else{
      res.status(401).json({token: null, message: 'Invalid password'})
    }
  }
}