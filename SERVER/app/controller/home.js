/*
 * Author: 朱世新
 * Date: 2021-06-21 11:17:49
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-22 23:12:44
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

  async getData(){
    this.ctx.body = "hello egg";
  }
}

module.exports = HomeController;
