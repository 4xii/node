<!--
 * @Author: 朱世新
 * @Date: 2021-06-29 23:14:34
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-06-29 23:37:42
 * @Description: 
-->
<template>
  <div>
    <h1>登录</h1>
    <form @submit.prevent="doLogin">
      <input type="text" v-model="user.username">
      <input type="text" v-model="user.password">
      <button>登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      user:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    doLogin(){
      axios.post("http://127.0.0.1:7001/jwtlogin",{user:this.user})
      .then((res)=>{
        if(res.data.code === "20000"){
          localStorage.setItem("token",res.data.token)
          console.log(res.data.token);
          this.$router.push("/")
        }
      })
    }
  }
}
</script>