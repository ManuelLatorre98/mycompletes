const {check} = require('express-validator')
const gameModel = require('../../models/game')
const { validateResult } = require('../../helpers/validateHelper')
const mongoose = require('mongoose')
const {normalizeString} = require('../../helpers/stringFormatHelper')

const validateGameData = [
  check('name')
    .exists()
    .not()
    .isEmpty(),
  check('calification')
    .exists()
    .not()
    .isEmpty(),
  check('plataformLinks')
    .exists()
    .not()
    .isEmpty(),
  check('developer')
    .exists()
    .not()
    .isEmpty(),
  (req,res,next) => {
    validateResult(req,res,next)
  }
]

const validateExistGameOfDeveloper = async(req,res,next) => {
  const {developer} = req.params
  let game = []
  if(developer){
  game = await gameModel.find({'developer': normalizeString(developer)})
  }
  if(game.length){
    next()
  }else{
    console.log(`Not exists game of that developer`)
    res.status(409).json("Not exists game of that developer")
  }
}

module.exports={
  validateGameData,
  validateExistGameOfDeveloper
}