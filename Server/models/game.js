const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
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
  developer: {
    type:String,
    require:true,
    trim:true
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
module.exports = mongoose.model('game',gameSchema)
