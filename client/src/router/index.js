/*
 * Author: 朱世新
 * Date: 2021-06-29 23:14:51
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-30 00:18:08
 * Description: 
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path === "/login"){
    next();
  } else {
    if(localStorage.getItem("token")){
      next();
    }else{
      next("/login")
    }
  }
})
export default router