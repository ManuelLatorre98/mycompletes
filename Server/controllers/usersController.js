const {fetchAllUsers, fetchUserById} = require('../services/userService')
const {userClearData, userClearDataList} = require('../helpers/dataHelper')
module.exports = {
  async getAllUsers(req, res, next){
    try{
      const usersList = await fetchAllUsers()
      const userListClear = userClearDataList(usersList)
      res.status(200).json(userListClear)
    }catch(err){
      next(err)
    } 
  },

  async getUserById(req, res, next){
    try{
      const {id} = req.params
      const user = await fetchUserById(id)
      const userClear = userClearData(user)
      res.status(200).json(userClear)
    }catch(err){
      next(err)
    }
  },

  async getCollection(req, res, next){
    try{
      const {id, collection} = req.params
      //Obtengo la coleccion desde id usuario/ ME fui a hacer los metodos de las colecciones
      console.log(collection)
    }catch(err){
      next(err)
    }
  }
}