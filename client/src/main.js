/*
 * Author: 朱世新
 * Date: 2021-06-21 12:27:36
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-29 23:24:43
 * Description: 
*/
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'


Vue.use(VueAxios, axios);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
