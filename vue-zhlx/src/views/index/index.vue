<template>
    <div class="index">
        <div class="main">
            <router-view/>
        </div>
        
        <div class="bom">
            <div v-for="(item,i) in tablist" :key="i">
                
                <router-link :to="item.url" tag="li" v-if="item.txt==='购物车'" class="lis">{{item.txt}}<span v-if="sum>0" class="item">{{sum}}</span></router-link>
               
                <router-link v-else :to="item.url" tag="li">{{item.txt}}</router-link>
            </div>
           
        </div>
    </div>
</template>

<script>
import {mapGetters } from 'vuex'


export default {
    name:"index",
    data(){
        return {
            ind:0,
            tablist:[
                {
                    txt:"首页",
                    url:"/index/home"
                 
                },
                {
                    txt:"分类",
                    url:"/index/classify"
                 
                },{
                    txt:"购物车",
                    url:"/index/car"
                 
                },{
                    txt:"我的",
                    url:"/index/my"
                   
                }
            ]
        }
    },
    created(){
       
    },
    computed: {
      ...mapGetters(['sum'])  
    },
    methods:{

    }
}
</script>

<style scoped>
.index{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.main{
    flex:1;
    overflow: hidden;
}
.bom{
    display: flex;
    height: 44px;
    line-height: 44px;
    width: 100%;
    border-top: 1px solid #ccc;
}
.bom>div{
    flex: 1;
    height: 44px;
    line-height: 44px;
    width: 100%;
    text-align: center;
}
.router-link-active{
    color: #f00;
}
.lis{
    position: relative;
}
.item {
    position: absolute;
    right: 10px;
    top: 0;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    width: 20px;
    border-radius: 50%;
    background: #f00;
    color: #fff;
}
</style>