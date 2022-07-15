const {check} = require('express-validator')
const movieModel = require('../../models/movie')
const { validateResult } = require('../../helpers/validateHelper')
const {normalizeString} = require('../../helpers/stringFormatHelper')

const validateMovieData = [
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
  check('director')
    .exists()
    .not()
    .isEmpty(),
  check('duration')
    .exists()
    .not()
    .isEmpty(),
  (req,res,next) => {
    validateResult(req,res,next)
  }
]

const validateExistMovieOfDirector = async(req,res,next) => {
  const {director} = req.params
  let movie = []
  if(director){
  movie = await movieModel.find({'director': normalizeString(director)})
  }
  if(movie.length){
    next()
  }else{
    console.log(`Not exists movie of that director`)
    res.status(409).json("Not exists movie of that director")
  }
}

module.exports={
  validateMovieData,
  validateExistMovieOfDirector
}