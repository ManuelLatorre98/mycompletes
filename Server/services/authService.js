const usersModel= require('../models/user')
module.exports ={
  async createUser(data){
    const user = usersModel(data)
    const userSaved = await user.save()
    return userSaved
  }
}