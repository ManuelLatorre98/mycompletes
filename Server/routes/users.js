const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const { validateCreate } = require('../middlewares/validators/users') 

router.post('/',validateCreate, userController.register)

module.exports = router