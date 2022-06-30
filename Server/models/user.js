const {Schema, model, default: mongoose} = require('mongoose')
const {isEmail} = require('validator')
new Schema({
  email: {
    type: String,
    require: true,
    validate: [isEmail, 'invalid email'],
    createIndexes: {unique: true}
  },
  nickName: 
  {
    type: String,
    require:true,
    createIndexes: {unique:true}
  },
  password: {
    type: String, 
    require:true
  },
  dateBorn: {
    type: Date
  },
  things:[{
    type: mongoose.Schema.Types,
    ref: 'Thing' //referencia a things
  }]
})