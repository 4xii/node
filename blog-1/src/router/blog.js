/*
 * Author: 朱世新
 * Date: 2021-05-17 23:50:46
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-20 23:35:40
 * Description: 
*/
const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method // GET POST
  const url = req.url
  req.path = url.split('?')[0]
  //获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  //获取博客详情
  if (method === 'GET' && res.path === '/api/blog/detail') {
    return {
      msg: '这是获取博客详情的接口'
    }
  }

  //新建一篇博客
  if (method === 'POST' && res.path === '/api/blog/new') {
    return {
      msg: '这是新建博客的接口'
    }
  }

  //更新一篇博客
  if (method === 'POST' && res.path === '/api/blog/update') {
    return {
      msg: '这是更新博客的接口'
    }
  }

  //删除一篇博客
  if (method === 'POST' && res.path === '/api/blog/del') {
    return {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleBlogRouter