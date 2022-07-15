const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middlewares/authJwt')
const { validateBookData, validateExistBooksOfAutor } = require('../middlewares/validators/booksValidator')
const {getAllBooks, getBookById, getBookByAutor,getBookByPages,getBooksByCalification, postBook, editBook, removeBook} = require('../controllers/bookController')
const { validateNotExist,validateExistByIdOrName, validateExistById, }= require('../helpers/apiHelper')
const bookModel = require('../models/book')

router.get('/autor/:autor',verifyToken,validateExistBooksOfAutor, getBookByAutor)
router.get('/pages', verifyToken, getBookByPages)
router.get('/calification', verifyToken, getBooksByCalification)
router.get('/:id', verifyToken,validateExistByIdOrName('Book',bookModel), getBookById) //Works with _id or name of book
router.get('/', verifyToken, getAllBooks)
router.post('/add', verifyToken,validateBookData, validateNotExist('Book',bookModel), postBook) 
router.patch('/:id', verifyToken,validateExistById('Book',bookModel), editBook) //Works only with _id of book
router.delete('/:id', verifyToken, validateExistById('Book',bookModel), removeBook)

//get books by category
//get books by popularity recibe la cantidad a devolver por query
module.exports = router