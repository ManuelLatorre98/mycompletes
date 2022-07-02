const express= require('express')
const router = express.Router()
const usersRouter = require('./users')

router.use('/auth', usersRouter)
module.exports = router