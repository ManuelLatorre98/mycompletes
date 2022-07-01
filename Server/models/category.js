const {Schema, model, default: mongoose} = require('mongoose')

const categorySchema= new Schema({
  name:{
    type: String
  },
  finishied: {
    type: Boolean,
    default:false,
    dateFinish:{
      type: Date
    }
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
  categories:[{
    type: mongoose.Schema.Types,
    ref: 'Category'
  }],
},{
  timestamps:true,
  versionKey:false
})