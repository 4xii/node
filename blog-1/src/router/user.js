const handleBlogRouter = require("./blog")

/*
 * Author: 朱世新
 * Date: 2021-05-17 23:50:54
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-04 07:14:33
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
    if(result){
      return new SuccessModel()
    }
    return new ErrorModel('登录失败')
    
    // return {
    //   msg: '这是登录的接口'
    // }
  }
}

module.exports = handleUserRouter