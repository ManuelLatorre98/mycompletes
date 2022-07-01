const usersSchema = require('../models/user')
module.exports ={
  async createUser(data){
    const user = usersSchema(data)
    const userSaved = await user.save()
    
  }
}