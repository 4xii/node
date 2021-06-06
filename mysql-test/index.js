/*
 * Author: 朱世新
 * Date: 2021-06-06 20:51:18
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-06 21:01:25
 * Description: 
*/
const mysql = require('mysql')

//创建链接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jv1234',
  port: '3306',
  database: 'myblog'
})

// 开始链接
con.connect()

// 执行 sql 语句
const sql = 'select * from users;'
con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(result);
})

// 关闭链接
con.end()