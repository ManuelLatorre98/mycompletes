const express = require("express")
const path = require('path')
const cors= require('cors')
const pkg = require('./package.json')
const logger = require('morgan')
const indexRouter = require('./routes/index')
//const cookieParser = require('cookie-parser')
const app= express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//CORS
app.use(cors())
/* let whiteList=[`http://localhost:${config.dev.PORT}`]

let corsOptions = {
    origin: function (origin, callback){
        if(!origin || whiteList.indexOf(origin)!=-1){
            return callback(null, true);
        }else{
            return callback(new Error('Not allowed by CORS'))
        }
    }
} */

//Welcome api route
app.set('pkg', pkg)
app.get('/',/* cors(corsOptions), */ (req,res)=>{
    res.json({
        message: 'API datos de aplicacion MyCompleted',
        name: app.get('pkg').name,
        version: app.get('pkg').version,
        docs: ''
    })
})


//All routes
app.use('/', indexRouter)

//ADD DIRECTION OF SWAGGER
/*app.use(errorLog)
app.use(errorHandler)*/


module.exports= app
