<template>
    <div class="register">
        <ul class="register-ul">
            <h3>注册</h3>
            <li><input type="text" placeholder="用户名" v-model="phone"></li>
            <li><input type="password" placeholder="密码" v-model="pwd"></li>
            <li><button @click="clicks">注册</button></li>
        </ul>
    </div>
</template>

<script>
import {register} from '@/api/api'
export default {
    name:'register',
    data(){
        return {
            phone:"",
            pwd:""
        }
    },
    methods:{
        async clicks(){
            try {
                const res=await register({phone:this.phone,password:this.pwd})
                // console.log(res); 
                if(res.data.code==1){
                    this.$router.go(-1)
                }
            } catch (e) {
               if(e.response.data.code==0){
                   alert(e.response.data.msg)
               } 
            }
           
        }
    }
}
</script>

<style>
    .register-ul{
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