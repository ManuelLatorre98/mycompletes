const jwt = require('jsonwebtoken')
const config = require('../config/config')

function generateToken(user){
  const token = jwt.sign({id: user._id}, config.tokenSecret.SECRET,{
    expiresIn: '24h'//24 hours
  })
  return token
}

function clearData(user, token){
  const dataUser = {
    email: user.email,
    nickName: user.nickName,
    dateBorn: user.dateBorn,
    token: token
  }
  return dataUser
}

module.exports = {generateToken, clearData}