const mongoose = require('mongoose')
const {isEmail} = require('validator')

const userSchema= new mongoose.Schema({
  email: {
    type: String,
    require: true,
    validate: [isEmail, 'invalid email'],
    createIndexes: {unique: true},
    trim:true
  },
  nickName: 
  {
    type: String,
    require:true,
    createIndexes: {unique:true},
    trim:true
  },
  password: {
    type: String, 
    require:true,
    trim:true
  },
  dateBorn: {
    type: Date
  },
  games:[{
    type: mongoose.Schema.Types,
    ref: 'Game' 
  }],
  books:[{
    type: mongoose.Schema.Types,
    ref: 'Book' 
  }],
  movies:[{
    type: mongoose.Schema.Types,
    ref: 'Movie' //referencia a things
  }],
},{
    timestamps:true,
    versionKey:false
  })
module.exports = mongoose.model('users',userSchema)



