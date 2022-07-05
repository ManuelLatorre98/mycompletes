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
module.exports = mongoose.model('movie',movieSchema)
