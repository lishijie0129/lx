<template>
    <div class="login">
        <ul class="login-ul">
            <h3>登录</h3>
            <li><input type="text" placeholder="用户名" v-model="phone"></li>
            <li><input type="password" placeholder="密码" v-model="pwd"></li>
            <li><button @click="clicks">登录</button></li>
        </ul>
    </div>
</template>

<script>
import {login} from '@/api/api'
export default {
    name:'login',
    data(){
        return {
            phone:"",
            pwd:""
        }
    },
    methods:{
        async clicks(){
           try {
                let res= await login({phone:this.phone,password:this.pwd})
               // console.log(res);
                if(res.data.code==1){
                    window.localStorage.texts=res.data.data.token; 
                    this.$router.push({path:this.$route.query.redirect})
                }
           } catch (e) {
                if(e.response.data.code==0){
                    //  console.log(e.response.data);
                    this.$router.push({path:"/register"})
                }
           } 
          
           
        }
    }
}
</script>

<style>
    .login-ul{
        margin: 0 auto;
    }
    input{
        width: 300px;
        height: 25px;
        margin-top: 15px;
    }
    button{
        height: 35px;
        width: 300px;
        margin-top: 15px;
        border-radius: 15px;
        border: 0;
        color:#fff;
        background: red;
        outline: none;
    }
</style>