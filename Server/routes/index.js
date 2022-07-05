const express= require('express')
const router = express.Router()
const authRouter = require('./auth')
const userRouter = require('./user')
const bookRouter = require('./book')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/book', bookRouter)

module.exports = router