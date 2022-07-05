const {check} = require('express-validator')
const { validateResult } = require('../../helpers/validateHelper')
const usersModel = require('../../models/user')
const validateRegister = [
  check('email')
    .exists()
    .isEmail(),
  check('nickName')
    .exists()
    .not()
    .isEmpty(),
  check('password')
    .exists()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"), //8 caracteres minimo mezclando letras y numeros
  check('dateBorn')
    .isISO8601() //Checkea que sea una fecha valida formato 2022-06-30
    .toDate(),
  (req,res,next) => {
    validateResult(req,res,next)
  }
]

const validateExist = async (req,res,next) => {
  const {userLogin}= req.body
  const user = await usersModel.find({$or: [{"email" : userLogin}, {"nickName": userLogin}]})
  if(user.length){
    next()
  }else{
    console.log(`User not exist`)
    res.status(409).json("User not exist in data base")
  }
}

const validateNotExist = async (req,res,next) => {
  const {email, nickName}= req.body
  const user = await usersModel.find({$or: [{"email" : email}, {"nickName": nickName}]})
  if(!user.length){
    next()
  }else{
    console.log(`User already exist`)
    res.status(409).json("Email or NickName already exist in data base")
  }
}

const validateExistId = async (req,res,next) => {
  const {id}= req.params
  const user = await usersModel.find({"nickName": id})
  if(user.length){
    next()
  }else{
    console.log(`User not exist`)
    res.status(409).json("User not exist in data base")
  }
}
module.exports = {validateRegister, validateExist, validateNotExist, validateExistId}