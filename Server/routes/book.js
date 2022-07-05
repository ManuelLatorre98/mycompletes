const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middlewares/authJwt')
const { validateNotExist, validateBookData, validateExistByIdOrName, validateExistById } = require('../middlewares/validators/booksValidator')
const {getAllBooks, getBookById, postBook, editBook, removeBook} = require('../controllers/bookController')

router.get('/',verifyToken, getAllBooks)
router.get('/:id',verifyToken,validateExistByIdOrName, getBookById) //Works with _id or name of book
router.post('/add', verifyToken,validateBookData, validateNotExist, postBook) 
router.patch('/:id', verifyToken,validateExistById, editBook) //Works only with _id of book
router.delete('/:id', verifyToken, validateExistById, removeBook)
//get books by category
//get books by autor recibe la cantidad a devolver por query
//get books by pages recibe la cantidad a devolver por query
//get books by popularity recibe la cantidad a devolver por query
module.exports = router