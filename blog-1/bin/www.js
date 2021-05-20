/*
 * Author: 朱世新
 * Date: 2021-05-17 17:37:27
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-20 18:06:18
 * Description: 
*/
const http = require('http')

const PORT = 5000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)
console.log('OK');