const config = require('../config/config')
const userModel= require('../models/user')
const jwt = require('jsonwebtoken')

 const verifyToken = async (req,res,next) => {
  const token = req.body.token
  if(token){
    try{
      const decoded = jwt.verify(token,config.tokenSecret.SECRET)
      const user = await userModel.findById(decoded.id, {password: 0})
      if(user){
        next()
      }else{
        res.status(404).json({message: 'No user found'})
      }
    }catch(err){
      console.log("TOKEN ERROR: ", err.message)
      res.status(401).json({message: `Token error: ${err.message}` })
    }
  }else{
    res.status(403).json({message: 'No token provided'})
  }
 }

 module.exports = {verifyToken}