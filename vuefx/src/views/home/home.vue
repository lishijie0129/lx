<template>
    <div id="home">
        <ul class="tit">
            <router-link to="/home/index" tag="li">首页</router-link>
            <router-link to="/home/classList" tag="li">分类</router-link>
            <router-link to="/home/ranking" tag="li">排行</router-link>
            <router-link to="/home/book" tag="li">书架</router-link>
        </ul>
       
        <router-view/>
    </div>
</template>

<script>
export default {
    name:"home"
}
</script>

<style scoped>
.tit{
    display: flex;
    width:100%;
    height: 40px;
    line-height: 40px;
    color: #a1a1a1;
    background: #333;
}
.tit li{
    flex: 1;
    text-align: center;
}
.tit .router-link-active{
    background-color: #454545;
    color: #f2f2f2;
}
</style>

