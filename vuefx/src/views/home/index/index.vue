<template>
    <div id="index">
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                   
                   <img :src="require('../../../assets/'+item.img)" alt="">
                </div>
               
            </div>
        </div> 
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import axios from 'axios'
import '@/mock/index.js'
export default {
    name:"index",
    data(){
        return {
            list:[]
        }
    },
    created(){
        axios.get("/data/img").then(res=>{
            this.list=res.data
            // console.log(this.list);
            this.$nextTick(()=>{
            new Swiper(".swiper-container",{
                loop:true,
                autoplay:{
                    delay:1000
                }
            })
        })
            
        })
        
    }
}
</script>

<style>
.swiper-container{
    width: 100%;
    height: 180px;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
</style>