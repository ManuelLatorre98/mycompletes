const express = require('express')
const router = express.Router()
const { validateNotExist,validateExistByIdOrName, validateExistById, }= require('../helpers/apiHelper')
const {verifyToken} = require('../middlewares/authJwt')
const { validateCategoryData} = require('../middlewares/validators/categoryValidator')
const {getAllCategories, getCategoryById, postCategory,editCategory,removeCategory} = require('../controllers/categoryController')
const gameCategoryModel = require('../models/game-category')

router.get('/:id', verifyToken,validateExistByIdOrName('Category',gameCategoryModel), getCategoryById(gameCategoryModel))
router.get('/', verifyToken, getAllCategories(gameCategoryModel))
router.post('/add', verifyToken,validateCategoryData, validateNotExist('Category',gameCategoryModel), postCategory(gameCategoryModel))
router.patch('/:id', verifyToken,validateExistById('Category',gameCategoryModel), editCategory(gameCategoryModel))
router.delete('/:id', verifyToken, validateExistById('Category',gameCategoryModel), removeCategory(gameCategoryModel,'game'))


module.exports = router 
