<template>
    <div class="index">
        <div>
            <router-view/>
        </div>
        <footer>
            123
        </footer>
    </div>
</template>

<script>
export default {
    name:"index",
    data(){
        return {
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

    }
}
</script>

<style>
    .index{
        width: 100%;
        height: 100%;
    }
    .index>div{
        flex: 1;
    }
    footer{
        height: 44px;
        width: 100%;
        line-height: 44px;
        border-top: 1px solid #ccc;
    }
</style>