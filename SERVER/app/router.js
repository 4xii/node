/*
 * Author: 朱世新
 * Date: 2021-06-21 11:17:49
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-24 23:46:17
 * Description: 
*/
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login',controller.home.login)
  router.post('/login',controller.home.doLogin)
  router.post('/logout',controller.home.logout)
};
