<template>
    <dl class="item" @click="clicks(item.detail)">
        <dt>
            <img v-lazy="item.cover" alt="">
        </dt>
        <dd>
            <li>
                <h3>{{item.name}}</h3>
                <p>累计{{(item.volume/10000).toFixed(1)}}万份</p>
            </li>
            <div><span>{{item.price}}</span><span><img :src="require('@/img/购物车1.png')" alt="" @click.stop="goToShop(item.id)"></span></div>
        </dd>
    </dl>
</template>

<script>
import {getUserInfo,addCar} from '@/api/api.js'
export default {
    name:"item",
    props:{
        item:{
            type:Object,
        }
    },
    methods:{
        clicks(obj){
            //跳详情页是吧数据给的detail传过去
            this.$router.push({
                path:"/datails",
                query:{obj}
            })
        },
        async goToShop(id){
            console.log(id);
            
            let res=await getUserInfo();
            let user=res.data.data.uid
            let addRes=await addCar({user_id:user,shop_id:id})
            console.log(addRes,"addRes");

        }
    }
}
</script>

<style>
    .item{
        display: flex;
        width: 100%;
        height: 150px;
        border: 1px solid #ccc;
    }
    .item dt{
        width: 150px;
        height: 100%;
        border-right: 1px solid #ccc;
    }
    .item dt img{
        width: 150px;  
    }
    .item dd{
        flex: 1;
        display: flex;
        flex-direction: column;
     }
    .item dd>li{
        flex: 1;
        
    }
    .item dd>li p{
        margin-top: 25px;
    }
    .item dd>div{
        height: 30px;
        display: flex;
        justify-content: space-between;
    }
    .item dd>div span img{
        width: 30px;
        height: 30px;
    }
</style>