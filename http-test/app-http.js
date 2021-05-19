/*
 * Author: 朱世新
 * Date: 2021-05-16 23:48:49
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-18 00:02:42
 * Description: 
*/
// const http = require('http');
// const server = http.createServer((req,res)=>{
//   res.end('hello world')
// });
// server.listen(8000)

/* nodejs处理get请求 */
//测试用例
//http://localhost:8000/api/blog/list?author=zhangsan&keyworld=a
// const http = require('http');
// const querystring = require('querystring')
// const server = http.createServer((req,res)=>{
//   console.log(req.method);//GET
//   const url = req.url
//   console.log('url:',url);
//   req.query = querystring.parse(url.split('?')[1]) //解析querystring
//   console.log('query:',req.query);
//   res.end(JSON.stringify(req.query));//将querystring返回
// });

// server.listen(8000)
// console.log('OK');

/* node.js处理post请求 */
const http = require('http')
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    //数据格式
    console.log('content-type', req.headers['content-type']);
    //接收数据
    let postData = ""
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      console.log(postData);
      res.end('hello World') // 在这里返回，因为是异步
    })
  }
});
server.listen(8000);
console.log('OK');

/* node.js处理路由 */
// const http = require('http')
// const server = http.createServer((req,res)=>{
//   const url = req.url
//   const path = url.split('?')[0]
//   res.end(path);//返回路由
// });
// server.listen(8000)