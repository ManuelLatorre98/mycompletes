function userClearData(user){
  const dataUser = {
    email: user.email,
    nickName: user.nickName,
    dateBorn: user.dateBorn,
  }
  return dataUser
}

function userClearDataList(userList){
  let userData
  let userDataList=[]
  userList.forEach(user => {
    userData= userClearData(user)
    userDataList.push(userData)
    
  });
  return userDataList
}

function bookClearData(book){
  const dataBook={
    _id: book._id,
    name: book.name,
    calification: book.calification,
    autor: book.autor,
    pages: book.pages,
    categories: book.categories
  }
  return dataBook
}

function bookClearDataList(bookList){
  let bookData
  let bookDataList=[]
  bookList.forEach(book => {
    bookData= bookClearData(book)
    bookDataList.push(bookData)
    
  });
  return bookDataList
}
module.exports = {userClearData, userClearDataList, bookClearData, bookClearDataList}