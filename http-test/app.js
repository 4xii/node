/*
 * Author: 朱世新
 * Date: 2021-05-17 13:55:34
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-17 17:13:01
 * Description: 
*/
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  //设置返回格式为 JSON
  res.setHeader('Content-type','application/json')

  //返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }

  //返回
  if(method === 'GET'){
    res.end(
      JSON.stringify(resData)
    )
    console.log(JSON.stringify(resData));
  }
  if(method === 'POST'){
    let postData = ''
    req.on('data',chunk=>{
      postData+=chunk.toString()
    })
    req.on('end',()=>{
      resData.postData = postData
      //返回
      res.end(
        JSON.stringify(resData)
      )
    })
  }
})

server.listen(8000)
console.log('OK');