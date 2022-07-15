const mongoose = require('mongoose')

const categorySchema= new mongoose.Schema({
  name:{
    type: String
  },
  games:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game' 
  }],
  books:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book' 
  }],
  movies:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie' //referencia a things
  }]
},{
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model('category',categorySchema)