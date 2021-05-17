/*
 * Author: 朱世新
 * Date: 2021-05-17 17:37:27
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-17 17:45:46
 * Description: 
*/
const http = require('http')

const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)