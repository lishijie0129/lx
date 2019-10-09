<template>
    <div id="login">
        登录
        <ul>
            <li><input type="text" v-model="names"></li>
            <li><input type="text" v-model="pwd"></li>
            <li><button @click="clicks">登录</button></li>
        </ul>
    </div>
</template>

<script>
import '@/mock/index.js'
import axios from 'axios'
export default {
    name:"login",
    data(){
        return{
            names:"",
            pwd:""
        }
    },
    methods:{
        clicks(){
            axios.post("/data/logins",{names:this.names}).then(res=>{
               
                let {code}=res.data
                if(code==1){
                    window.localStorage.setItem("name",this.names)
                    this.$router.push({path:this.$route.query.redirect})
                }else{
                    alert("No")
                }
            })
            
        }
    }
}
</script>

<style>

</style>