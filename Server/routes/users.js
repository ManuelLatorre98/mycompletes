const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const { validateRegister, validateExist, validateNotExist } = require('../middlewares/validators/users') 
const {verifyToken}= require('../middlewares/authJwt')

router.post('/register', validateRegister, validateNotExist, userController.register)
router.post('/login',validateExist, userController.login)
module.exports = router