const express = require('express')
const router = express.Router()
const { validateNotExist,validateExistByIdOrName, validateExistById, }= require('../helpers/apiHelper')
const {verifyToken} = require('../middlewares/authJwt')
const { validateCategoryData} = require('../middlewares/validators/categoryValidator')
const {getAllCategories, getCategoryById, postCategory,editCategory,removeCategory} = require('../controllers/categoryController')
const bookCategoryModel = require('../models/book-category')

router.get('/:id', verifyToken,validateExistByIdOrName('Category',bookCategoryModel), getCategoryById)
router.get('/', verifyToken, getAllCategories)
router.post('/add', verifyToken,validateCategoryData, validateNotExist('Category',bookCategoryModel), postCategory)
router.patch('/:id', verifyToken,validateExistById('Category',bookCategoryModel), editCategory)
router.delete('/:id', verifyToken, validateExistById('Category',bookCategoryModel), removeCategory(bookCategoryModel,'book'))

module.exports = router 
