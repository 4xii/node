const handleBlogRouter = require("./blog")

/*
 * Author: 朱世新
 * Date: 2021-05-17 23:50:54
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-18 00:21:07
 * Description: 
*/
const handleUserRouter = (req, res) => {
  const method = req.method // GET POST

  //登录
  if (method === 'POST' && res.path === '/api/user/login') {
    return {
      msg: '这是登录的接口'
    }
  }
}

module.exports = handleUserRouter