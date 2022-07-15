const express = require('express')
const router = express.Router()
const { validateNotExist,validateExistByIdOrName, validateExistById, }= require('../helpers/apiHelper')
const {verifyToken} = require('../middlewares/authJwt')
const { validateMovieData, validateExistMovieOfDirector } = require('../middlewares/validators/movieValidator')
const {getAllMovies, getMovieById,getMovieByDirector,getMoviesByTime,getMoviesByCalification, postMovie,editMovie,removeMovie} = require('../controllers/movieController')
const movieModel = require('../models/movie')


router.get('/director/:director',verifyToken,validateExistMovieOfDirector, getMovieByDirector)
router.get('/time', verifyToken, getMoviesByTime)
router.get('/calification', verifyToken, getMoviesByCalification)
router.get('/:id', verifyToken,validateExistByIdOrName('Movie',movieModel), getMovieById)
router.get('/', verifyToken, getAllMovies)
router.post('/add', verifyToken,validateMovieData, validateNotExist('Movie',movieModel), postMovie)
router.patch('/:id', verifyToken,validateExistById('Movie',movieModel), editMovie)
router.delete('/:id', verifyToken, validateExistById('Movie',movieModel), removeMovie)

module.exports = router 