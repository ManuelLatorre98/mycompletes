const mongoose = require('mongoose')

const movieCategorySchema= new mongoose.Schema({
  name:{
    type: String
  },
  movies:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movie' 
  }],
},{
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model('movie-category',movieCategorySchema)