const {check} = require('express-validator')
const { validateResult } = require('../../helpers/validateHelper')


const validateCreate = [
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
  (req,res,next) => {
    validateResult(req,res,next)
  }
]

module.exports = {validateCreate}