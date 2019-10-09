<template>
    <div id="classList">
        <ul class="list-box">
            <li :class="{active:ind===0}"  @click="clicks(0)">热门</li>
            <li :class="{active:ind===1}"  @click="clicks(1)">新书</li>
            <li :class="{active:ind===2}"  @click="clicks(2)">免费</li>
            <li :class="{active:ind===3}"  @click="clicks(3)">完本</li>
        </ul>
         <div>
             <Item v-for="(item,index) in newList" :key="index" :item="item">
                 
             </Item>
        </div>
    </div>
   
</template>

<script>
import axios from 'axios'
import '@/mock/index.js'
import Item from '@/components/item.vue'
export default {
    name:"classList",
    data(){
        return {
            ind:0,
            newList:[],
            list:[]
        }
    },
    components:{
        Item
    },
    created(){
        axios.get("/data/list").then(res=>{
            let {data}=res;
            this.list=data
            this.newList=data['ranklist'+this.ind]
            // console.log(this.newList);
        })
    },
    methods:{
        clicks(i){
            this.ind=i
            this.newList=this.list['ranklist'+this.ind]
        }
    }
}
</script>

<style>
.list-box{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #999;
    margin-top: 5px;
}
.list-box li{
    flex: 1;
    text-align: center;
    border-radius: 15px;
    margin: 0 10px;
    background: #666666;
}
.list-box .active{
    background: #f00;
    color: #fff;
}
</style>