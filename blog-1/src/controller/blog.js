/*
 * Author: 朱世新
 * Date: 2021-05-20 17:44:22
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-08 07:26:49
 * Description: 
*/
const { exec } = require('../db/mysql')
const getList = (author, keyword) => {
  let sql = 'select * from blogs where 1=1 '
  if (author) {
    sql += `and author='${author}'`
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  //返回promise
  return exec(sql)
}

const getDetail = (id) => {
  //先返回假数据
  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title content 属性
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()

  const sql = `
    insert into blogs (title,content,createtime,author)
    values ('${title}','${content}','${createTime}','${author}')
  `
  return exec(sql).then(insertData => {
    console.log('insertData是', insertData);
    return {
      id: insertData.insertId
    }
  })
}

const updataBlog = (id, blogData = {}) => {
  // id 就是要更新博客的id
  // blogData 是一个博客对象，包含 title content 属性

  const title = blogData.title
  const content = blogData.content

  const sql = `
    update blogs set title='${title}',content='${content}' where id=${id} 
  `
  return exec(sql).then(updateData => {
    console.log('updateData是', updateData);
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id,author) => {
  //id 就是要删除博客的id
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then(deleteData => {
    //console.log('deleteData是', deleteData);
    if (deleteData.affectedRows > 0) {
      return true
    }
    return false
  })
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}