const express = require('express')
const router = express.Router()
const { validateNotExist,validateExistByIdOrName, validateExistById, }= require('../helpers/apiHelper')
const {verifyToken} = require('../middlewares/authJwt')
const { validateCategoryData} = require('../middlewares/validators/categoryValidator')
const {getAllCategories, getCategoryById, postCategory,editCategory,removeCategory} = require('../controllers/categoryController')
const categoryModel = require('../models/movie-category')
const movieCategoryModel = require('../models/movie-category')

router.get('/:id', verifyToken,validateExistByIdOrName('Category',movieCategoryModel), getCategoryById)
router.get('/', verifyToken, getAllCategories)
router.post('/add', verifyToken,validateCategoryData, validateNotExist('Category',categoryModel), postCategory)
router.patch('/:id', verifyToken,validateExistById('Category',categoryModel), editCategory)
router.delete('/:id', verifyToken, validateExistById('Category',categoryModel), removeCategory(movieCategoryModel,'movie'))

module.exports = router 