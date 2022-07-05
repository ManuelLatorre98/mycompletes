const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim:true
  },
  calification: {
    type: Number
  },
  autor: {
    type:String,
    require:true,
    trim:true
  },
  pages: {
    type: Number
  },
  users:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  categories:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
},{
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model('book',bookSchema)