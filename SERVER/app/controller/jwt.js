/*
 * Author: 朱世新
 * Date: 2021-06-29 22:54:05
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-30 00:14:23
 * Description: 
*/
const Controller = require("egg").Controller;

class JwtController extends Controller {
  async doLogin() {
    let user = this.ctx.request.body.user; //user.username;user.password
    if (user.username === 'xiaoming' && user.password === '123') {
      let user_jwt = { username: user.username }
      let token = this.app.jwt.sign(user, this.app.config.jwt.secret)
      this.ctx.body = {
        code: "20000",
        token: token
      }
    } else {
      this.ctx.body = {
        code: "40000",
        msg: "用户名或密码错误"
      }
    }
  }

  async getMessage() {

    let token = this.ctx.request.header.token;
    // console.log(token);
    // this.ctx.body = "hello jwt"
    try {
      let decode = this.app.jwt.verify(token, this.app.config.jwt.secret);
      this.ctx.body = "hello jwt";
    } catch (e) {
      this.ctx.body = "token 未能通过校验"
    }
  }


  async index() {
    let user = {
      username: "xiaoming"
    }
    //egg-jwt
    //用户登录
    let token = this.app.jwt.sign(user, this.app.config.jwt.secret)
    //this.ctx.body = token;
    try {
      let decode = this.app.jwt.verify(token, this.app.config.jwt.secret);
      this.ctx.body = decode;
    } catch (e) {
      this.ctx.body = "token 未能通过校验"
    }
  }
}

module.exports = JwtController