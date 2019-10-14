<template>
    <div class="classify">
        <div class="left">
            <li v-for="(item,index) in newData" :key="index" :class="{active:index==ind}" @click="clicks(index)">{{item.title}}</li>
        </div>
        <div class="right">
            <div class="r-top">
                <li v-for="(item,index) in oneData" :key="index" :class="{cur:index==inds}" @click="tClick(index)">{{item.name}}</li>
            </div>
            <div class="r-con">
                <div v-if="newDataDa&&newDataDa.length==0"><img :src="require('@/img/timg1.jpg')" alt=""></div>
                <Item v-for="(item,index) in newDataDa" :key="index" :item="item" v-else></Item>
            </div>
        </div>
    </div>  
</template>

<script>
import {leftList,selectType} from "@/api/api.js"
import Item from '@/components/item.vue'
export default {
    name:'classify',
    data(){
        return {
            newData:[],//左边的tab
            oneData:[],//上边的tab
            newDataDa:[],//左边的内容数据
            ind:0,//记录左边下标
            inds:0//记录上边的下标
        }
    },
    components:{
        Item
    },
    async created(){
        let res=await leftList()
        this.newData=res.data.data
        this.getData() 
        
    },
    methods:{
        clicks(ind){
            this.ind=ind;
            this.inds=0;
            this.getData()
            this.lData()

        },
        async getData(){
            //左边
            let res=await leftList()
            // console.log(res.data.data);
            this.newData=res.data.data
            this.oneData=res.data.data[this.ind].children
            // console.log(this.oneData); 
            this.lData() 
        },
        tClick(inds){
            this.inds=inds;
            this.lData()
        },
        async lData(){
            let res=await selectType({type_id:this.newData[this.ind].id,category_id: this.oneData.length>0&&this.oneData[this.inds].id})
            this.newDataDa=res.data.data
        },
       
    }
}
</script>

<style scoped>
    .classify{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .right{
        flex: 1;
        overflow: hidden;
    }
    .left{
        width: 100px;
        height: 100%;
        border-right: 1px solid #ccc;
    }
    .left li{
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .left li.active{
        color: #fff;
        background: #f00;
    }
    .r-top{
        display: flex;
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .r-top li{
        flex: 1;
        text-align: center;
    }
    .r-top li.cur{
        color: #f00;
        border-bottom: 2px solid #f00;
    }
    .r-con{
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .r-con>div img{
        width: 100%;
    }
</style>

