/*
 * Author: 朱世新
 * Date: 2021-06-04 07:03:36
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-09 00:08:20
 * Description: 
*/
const {exec} = require('../db/mysql')

const loginCheck = (username,password) => {
  const sql = `
    select username ,realname from users where username ='${username}' and password='${password}'
  `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  loginCheck
}