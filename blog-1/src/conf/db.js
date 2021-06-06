/*
 * Author: 朱世新
 * Date: 2021-06-06 21:15:51
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-06 22:36:17
 * Description: 
*/
const env = process.env.NODE_ENV //环境参数

//配置
let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'jv1234',
    port: '3306',
    database: 'myblog'
  }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'jv1234',
    port: '3306',
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}