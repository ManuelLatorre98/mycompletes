const express= require('express')
const router = express.Router()
const usersRouter = require('./users')

router.use('/register', usersRouter)

module.exports = router