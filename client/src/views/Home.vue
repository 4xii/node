<!--
 * @Author: 朱世新
 * @Date: 2021-06-29 23:13:55
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-06-30 00:19:14
 * @Description: 
-->
<template>
  <div>
    <h1>首页</h1>
    <button @click="getMessage">获取数据</button>
    <button @click="logout">注销</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods:{
    getMessage(){
      let token = localStorage.getItem("token")
      axios.get("http://127.0.0.1:7001/jwtmessage",{headers:{token:token}}).then((res)=>{
        console.log(res.data);
      })
    },
    logout(){
      localStorage.setItem("token","");
      location.reload();
    }
  }
}
</script>