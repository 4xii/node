/*
 * Author: 朱世新
 * Date: 2021-07-18 15:14:48
 * LastEditors: 朱世新
 * LastEditTime: 2021-07-18 15:26:52
 * Description: 
*/
const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

//读取文件内容
// fs.readFile(fileName,(err,data) => {
//   if(err){
//     console.error(err);
//     return
//   }
//   //data 是进制类型，需要转换为字符串
//   console.log(data.toString());
// })

// const content = '4xi吃鱼哦/n'
// const opt = {
//   flag: 'a' //追加写入、覆盖用 'w'
// }
// fs.writeFile(fileName, content, opt, (err) => {
//   if (err) {
//     console.error(err);
//   }
// })

//判断文件是否存在
fs.exists(fileName,(exist)=>{
  console.log('exist',exist);
})