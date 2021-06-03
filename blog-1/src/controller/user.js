/*
 * Author: 朱世新
 * Date: 2021-06-04 07:03:36
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-04 07:08:02
 * Description: 
*/
const loginCheck = (username,password) => {
  //先使用假数据
  if(username === 'zhangsan' && password === '123'){
    return true
  }
  return false
}

module.exports = {
  loginCheck
}