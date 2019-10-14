<template>
    <div class="home">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgData" :key="index">
                    <img :src="item.image" alt="">
                </div>
            </div>
        </div>
        <div class="lists">
            <div>
                <Item  v-for="(item,index) in listData" :key="index" :item="item"></Item>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {banner,homeData} from '@/api/api'
import BScroll from 'better-scroll'
import Item from '@/components/item.vue'
export default {
    name:"home",
    data(){
        return {
            imgData:[],
            listData:[],
            pageid:0,//页码
            limit:10, //数量
            isN:false
        }
    },
    components:{
        Item
    },
    async created(){
        let res=await banner()
        this.getData()
        this.imgData=res.data.data
        this.$nextTick(()=>{
            new Swiper(".swiper-container",{
                loop:true,
                autoplay:{
                    delay:1000
                }
            })
           this.getScroll()
        })
    },
    methods:{
       
        getScroll(){
            this.scrolls=new BScroll(".lists",{
                click:true,//better-scroll禁用原生事件,需加click为true
                pullDownRefresh: {
                    //下拉刷新
                    threshold: 30
                },
                    pullUpLoad: {
                    //上拉加载
                    threshold: -30
                }
                })
            this.scrolls.on("pullingDown",()=>{
                //下拉刷新的时候恢复初始值
               console.log("下拉刷新");
               this.listData=[];
               this.pageid=0;
               this.isN=false;
               this.getData();
           })
            this.scrolls.on("pullingUp",()=>{
                //上拉加载的时候改变页码数
                this.pageid++;
                if(!this.isN){
                     this.getData();
                }
                console.log("上拉加载");
            })
          
        },async getData(){
            let homeList=await homeData({pageid:this.pageid,limit:this.limit})
            this.listData=homeList.data.data
            this.scrolls.finishPullUp();
            this.scrolls.finishPullDown();
            if(homeList.data.data.length<10){
                this.isN=true;
                console.log("无数据");
                
            }
        }
    }
}
</script>

<style >
    .home{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    .home .lists{
        flex: 1;
        overflow: hidden;
        
    }
    .swiper-container,.swiper-slide img{
        width: 100%;
        height: 200px;
    }
</style>