/*
 * Author: 朱世新
 * Date: 2021-05-17 23:50:46
 * LastEditors: 朱世新
 * LastEditTime: 2021-05-18 00:20:57
 * Description: 
*/
const handleBlogRouter = (req, res) => {
  const method = req.method // GET POST

  //获取博客列表
  if (method === 'GET' && res.path === '/api/blog/list') {
    return {
      msg: '这是获取博客列表的接口'
    }
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