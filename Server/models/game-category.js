const mongoose = require('mongoose')

const gameCategorySchema= new mongoose.Schema({
  name:{
    type: String
  },
  games:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'game' 
  }],
},{
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model('game-category',gameCategorySchema)