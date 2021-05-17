/*
 * Author: 朱世新
 * Date: 2021-05-17 17:39:01
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-17 17:41:15
 * Description: 
*/
const serverHandle = (req,res)=>{
  //设置返回格式 JSON 
  res.setHeader ('Content-type','application/json')

  const resData ={
    name:'4xi',
    site:'4xicool',
    env:process.env.NODE_ENV
  }

  res.end(
    JSON.stringify(resData)
  )
}

module.exports = serverHandle