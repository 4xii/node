/*
 * Author: 朱世新
 * Date: 2021-06-21 11:17:49
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-24 23:46:56
 * Description: 
*/
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    if(this.ctx.session.user){
      await ctx.render("index")
    }else{
      ctx.redirect("/login")
    }
  }

  async login(){
    await this.ctx.render("login")
  }

  async logout(){
    this.ctx.session.user = "";
    this.ctx.redirect("/login")
  }

  async doLogin(){
    let username = this.ctx.request.body.username
    let password = this.ctx.request.body.password
    if(username == 'xiaoming' && password == '123'){
      this.ctx.session.user = username
      this.ctx.redirect("/")
    }else {
      this.ctx.redirect("/login")
    }
  }
}

module.exports = HomeController;
