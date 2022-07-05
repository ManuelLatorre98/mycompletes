const mongoose = require('mongoose')
const {isEmail} = require('validator')

const userSchema= new mongoose.Schema({
  email: {
    type: String,
    require: true,
    validate: [isEmail, 'invalid email'],
    index: {unique: true},
    trim:true
  },
  nickName: 
  {
    type: String,
    require:true,
    index: {unique:true},
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game', 
    dateFinish:{
      type: Date
    }
  }],
  books:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', 
    dateFinish:{
      type: Date
    }
  }],
  movies:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie', 
    dateFinish:{
      type: Date
    },
    calification:{
      type: Number
    }
  }],
},{
    timestamps:true,
    versionKey:false
  })
module.exports = mongoose.model('users',userSchema)



