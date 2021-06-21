/*
 * Author: 朱世新
 * Date: 2021-06-19 23:00:26
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-20 14:35:16
 * Description:
*/
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
      <h1>hello world</h1>
    `;
  }
}

module.exports = HomeController;
