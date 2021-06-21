/*
 * Author: 朱世新
 * Date: 2021-06-21 11:17:49
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-21 12:02:31
 * Description: 
*/
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render("index",{fruits:["香蕉","苹果","鸭梨"]})
  }
}

module.exports = HomeController;
