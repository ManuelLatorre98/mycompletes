const {Schema, model} = require('mongoose')

const bookSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim:true
  },
  calification: {
    type: Integer
  },
  plataformLink: {
    type: String
  },
  autor: {
    type:String,
    require:true,
    trim:true
  },
  pages: {
    type: Integer
  },
  finishied: {
    type: Boolean,
    default:false,
    dateFinish:{
      type: Date
    }
  },
  users:[{
    type: mongoose.Schema.Types,
    ref: 'User'
  }],
  categories:[{
    type: mongoose.Schema.Types,
    ref: 'Category'
  }],
},{
  timestamps:true,
  versionKey:false
})

export default model('Book',bookSchema)