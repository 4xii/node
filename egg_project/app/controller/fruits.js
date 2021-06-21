/*
 * Author: 朱世新
 * Date: 2021-06-20 14:51:59
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-21 11:37:16
 * Description: 
*/
const Controller = require("egg").Controller;
let fruitList = [
  "香蕉",
  "苹果",
  "鸭梨"
]
class FruitsController extends Controller {
  async index() {
    this.ctx.body = fruitList
  }

  async new() {
    this.ctx.body = `
    <form method='post' action='/fruits'>
      <input name='fruitname'>
      <button>添加</button>
    </form>
    `
  }

  async create(){
    let fruit = this.ctx.request.body
    fruitList.push(fruit.fruitname);
    //this.ctx.body = "添加成功"
    // 跳转到/fruits get请求
    //重定向
    this.ctx.redirect('/fruits')
  }

  async destroy(){

  }

  async update(){
    
  }

  // async getId(){
  //   let id = this.ctx.params.id
  //   this.ctx.body = `传递的id是${id}`
  // }

  // async createPage() {
  //   this.ctx.body = `
  //   <form method='post' action='/fruit'>
  //     <input name='fruitname'>
  //     <button>添加</button>
  //   </form>
  //   `
  // }
  
  // async createFruit() {
  //   let fruit = this.ctx.request.body
  //   fruitList.push(fruit.fruitname);
  //   this.ctx.body = "添加成功"
  // }
}
module.exports = FruitsController;
