/*
 * Author: 朱世新
 * Date: 2021-05-17 23:50:54
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-14 22:22:34
 * Description: 
*/
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')


const handleUserRouter = (req, res) => {
  const method = req.method // GET POST

  //登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    //const { username, password } = req.query
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {

        req.session.username = data.username
        req.session.realname = data.realname
      
        console.log('req.session is',req.session);
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }

  //登录验证的测试
  // if (method === 'GET' && req.path === '/api/user/login-test') {
  //   if (req.cookie.username) {
  //     return Promise.resolve(
  //       new SuccessModel({
  //         session:req.session
  //       })
  //     )
  //   }
  //   return Promise.resolve(new ErrorModel('尚未登录'))
  // }

}

module.exports = handleUserRouter