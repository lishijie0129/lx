<template>
    <div class="index">
        <div>
            <router-view/>
        </div>
        <footer>
            <dl v-for="(ele,index) in footData" :key="index" :class="{active:index==ind}" @click="clicks(index)">
                <dt><img :src="index==ind?require('@/img/'+ele.active):require('@/img/'+ele.img)" alt=""></dt>
                <dd>{{ele.txt}}</dd>
            </dl>
        </footer>
    </div>
</template>

<script>
export default {
    name:"index",
    data(){
        return {
            ind:0,
            footData:[
                {
                    txt: "首页",
                    url: "/index/home",
                    img: "首页.png",
                    active: "首页1.png"
                },
                {
                    txt: "分类",
                    url: "/index/classify",
                    img: "分类.png",
                    active: "分类1.png"
                },
                {
                    txt: "购物车",
                    url: "/index/car",
                    img: "购物车.png",
                    active: "购物车1.png"
                },
                {
                    txt: "我的",
                    url: "/index/my",
                    img: "我的.png",
                    active: "我的1.png"
                }
      ]
        }
    },
    methods:{
        clicks(ind){
            this.ind=ind;
            this.$router.push({
                path:this.footData[ind].url
            })
        }
    }
}
</script>

<style>
    .index{
        width: 100%;
        height: 100%;
        overflow: hidden
    }
    .index>div{
        flex: 1;
        overflow: auto;
    }
    footer{
        display: flex;
        height: 44px;
        width: 100%;
        font-size: 14px;
        border-top: 1px solid #ccc;
    }
    footer dl{
        flex: 1;
        text-align: center;
     
    }
    footer dl dt img{
        width: 20px;
    }
    footer .active{
        color: #f00;
    }
</style>