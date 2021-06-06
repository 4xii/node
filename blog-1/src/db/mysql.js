/*
 * Author: 朱世新
 * Date: 2021-06-06 21:21:22
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-06 22:53:23
 * Description: 
*/
const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

//创建链接对象
const con = mysql.createConnection(MYSQL_CONF)

//开始链接
con.connect()

// 统一执行 sql 的函数
function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      return resolve(result)
    })
  })
}

module.exports = {
  exec
}