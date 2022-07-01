const mongoose= require('mongoose')

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim:true
  },
  calification: {
    type: Number
  },
  plataformLink: {
    type: String
  },
  director: {
    type:String,
    require:true,
    trim:true
  },
  duration: {
    type: Number
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
module.exports = mongoose.model('movie',userSchema)
