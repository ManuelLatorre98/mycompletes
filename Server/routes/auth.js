const express = require('express')
const router = express.Router()
const {register, login} = require('../controllers/authController')
const { validateRegister, validateExist, validateNotExist } = require('../middlewares/validators/usersValidator') 

router.post('/register', validateRegister, validateNotExist, register)
router.post('/login',validateExist, login)

module.exports = router