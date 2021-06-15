/*
 * Author: 朱世新
 * Date: 2021-05-17 23:50:46
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-14 22:34:19
 * Description: 
*/
const { getList, getDetail, newBlog, updataBlog, delBlog } = require('../controller/blog')
const { login } = require('../controller/user')
const { exec } = require('../db/mysql')
const { SuccessModel, ErrorModel } = require('../model/resModel')

//统一的登录验证函数
const loginCheck = (req) => {
  if (!req.cookie.username) {
    return Promise.resolve(new ErrorModel('尚未登录'))
  }
}

const handleBlogRouter = (req, res) => {
  const id = req.query.id
  const method = req.method // GET POST
  const url = req.url
  req.path = url.split('?')[0]
  //获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    console.log(author, keyword);
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  //获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    // const data = getDetail(id)
    // return new SuccessModel(data)
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  //新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    // const data = newBlog(req.body)
    // return new SuccessModel(data)

    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      //未登录
      return loginCheck
    }

    req.body.author = req.session.username//假数据，开发登录时再改成真实数据
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })

  }

  //更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {

    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      //未登录
      return loginCheck
    }

    const result = updataBlog(id, req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
  }

  //删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      //未登录
      return loginCheck
    }

    const author = req.session.username//假数据，开发登录时再改成真实数据
    const result = delBlog(id, author)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter