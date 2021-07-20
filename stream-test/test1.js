/*
 * Author: 朱世新
 * Date: 2021-07-18 16:32:53
 * LastEditors: 朱世新
 * LastEditTime: 2021-07-18 16:35:21
 * Description: 
*/
//标准输入输出
// process.stdin.pipe(process.stdout)

// const http = require('http')
// const server = http.createServer((req,res) => {
//   if(req.method === 'POST'){
//     req.pipe(res)
//   }
// })
// server.listen(7202)

// 复制文件
const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')

const readStream = fs.createReadStream(fileName1)
const writeStream = fs.createWriteStream(fileName2)

readStream.pipe(writeStream)

readStream.on('data', chunk => {
    console.log(chunk.toString())
})
readStream.on('end', () => {
    console.log('copy done')
})