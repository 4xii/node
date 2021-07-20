/*
 * Author: 朱世新
 * Date: 2021-06-04 07:03:36
 * LastEditors: 朱世新
 * LastEditTime: 2021-07-18 17:51:33
 * Description: 
*/
const { exec, escape } = require('../db/mysql')

const login = (username, password) => {
  username = escape(username)
  password = escape(password)
  const sql = `
    select username ,realname from users where username =${username} and password=${password}
  `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}