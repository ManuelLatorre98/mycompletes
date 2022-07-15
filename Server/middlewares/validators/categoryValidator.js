const {check} = require('express-validator')
const { validateResult } = require('../../helpers/validateHelper')
const {normalizeString} = require('../../helpers/stringFormatHelper')

const validateCategoryData = [
  check('name')
    .exists()
    .not()
    .isEmpty(),
  (req,res,next) => {
    validateResult(req,res,next)
  }
]

module.exports={
  validateCategoryData,
}