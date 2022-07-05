const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middlewares/authJwt')
const {getAllUsers, getUserById, getCollection} = require('../controllers/usersController')
const {validateExistId} = require('../middlewares/validators/usersValidator')

router.get('/', verifyToken, getAllUsers) //Chekear que funque bien el verifyToken
router.get('/:id', verifyToken, validateExistId, getUserById) //Modificar validate exist para que funcione con querys
router.get('/:id/:collection', verifyToken, validateExistId, getCollection)

module.exports = router