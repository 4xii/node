const handleBlogRouter = require("./blog")

/*
 * Author: 朱世新
 * Date: 2021-05-17 23:50:54
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-09 00:08:52
 * Description: 
*/
const { loginCheck } = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method // GET POST

  //登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const  {username,password} = req.body
    const result = loginCheck(username,password)
    return result.then(data => {
      if(data.username){
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })

    
    // if(result){
    //   return new SuccessModel()
    // }
    // return new ErrorModel('登录失败')
  }
}

module.exports = handleUserRouter