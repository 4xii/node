/*
 * Author: 朱世新
 * Date: 2021-05-20 17:44:22
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-04 07:01:09
 * Description: 
*/
const getList = (author, keyword) => {
  //先返回假数据(格式是正确的)
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1621520449056,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1621520498817,
      author: '4xi'
    }
  ]
}

const getDetail = (id) => {
  //先返回假数据
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1621520449056,
    author: 'zhangsan'
  }
}

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title content 属性
  //console.log('blogData  : ',blogData)
  return {
    id: 3 //表示新建博客，插入倒数据表里面的id 
  }
}

const updataBlog = (id,blogData = {}) => {
  // id 就是要更新博客的id
  // blogData 是一个博客对象，包含 title content 属性
  console.log('updata blog',id,blogData)
  return true
}

const delBlog = (id) => {
  //id 就是要删除博客的id

  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}