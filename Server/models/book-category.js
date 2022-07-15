const mongoose = require('mongoose')

const bookCategorySchema= new mongoose.Schema({
  name:{
    type: String
  },
  books:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book' 
  }],
},{
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model('book-category',bookCategorySchema)