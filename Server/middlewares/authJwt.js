 const config = require('../config/config')
const user = require('../models/user')
 const userModel= require('../models/user')

 const verifyToken = async (req,res,next) => {
  const token = req.headers['token']
  if(token){
    const decoded = jwt.verify(token,config.tokenSecret.SECRET)
    const user = await user.findById(decoded.id, {password: 0})
    if(user){
      console.log(user)
      next()
    }else{
      res.status(404).json({message: 'No user found'})
    }
  }else{
    res.status(403).json({message: 'No token provided'})
  }
 }

 module.exports = {verifyToken}