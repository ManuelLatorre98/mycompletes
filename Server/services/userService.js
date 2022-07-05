const userModel = require('../models/user')
const fetchAllUsers = async() => {
  const usersList = await userModel.find()
  return usersList
}

const fetchUserById = async(id) => {
  const user = await userModel.find({"nickName": id})
  return user[0]
}


module.exports = {
  fetchAllUsers,
  fetchUserById
}
