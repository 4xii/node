/*
 * Author: 朱世新
 * Date: 2021-05-20 17:44:22
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-21 17:30:37
 * Description: 
*/
const getList = (author, keyword)=>{
  //先返回假数据(格式是正确的)
  return [
    {
      id:1,
      title:'标题A',
      content:'内容A',
      createTime:1621520449056,
      author:'zhangsan'
    },
    {
      id:2,
      title:'标题B',
      content:'内容B',
      createTime:1621520498817,
      author:'4xi'
    }
  ]
}

const getDetail = (id) => {
  //先返回假数据
  return {
    id:1,
      title:'标题A',
      content:'内容A',
      createTime:1621520449056,
      author:'zhangsan'
  }
}
module.exports = {
  getList,
  getDetail
}