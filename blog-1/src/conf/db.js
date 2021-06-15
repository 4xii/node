/*
 * Author: 朱世新
 * Date: 2021-06-06 21:15:51
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-14 22:04:49
 * Description: 
*/
const env = process.env.NODE_ENV //环境参数

//配置
let MYSQL_CONF
let REDIS_CONF
if (env === 'dev') {
  //mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'jv1234',
    port: '3306',
    database: 'myblog'
  }

  //redis
  REDIS_CONF = {
    port: 6379,
    hsot: '127.0.0.1'
  }
}

if (env === 'production') {
  //mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'jv1234',
    port: '3306',
    database: 'myblog'
  }

  //redis
  REDIS_CONF = {
    port: 6379,
    hsot: '127.0.0.1'
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}