<template>
  <div class="home">
      <div class="top">
        <span @click="goToaddress">地址</span>
      </div>
      <div class="cons">
        <router-link to="/index/home/super" tag="li">多点超市</router-link>
        <router-link to="/index/home/selection" tag="li">全球精选</router-link>
       
      </div>
      <div class="m-cons">
        <router-view />
      </div>
       
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return {

    }
  },
  methods: {
    goToaddress(){
      this.$router.push({
        path:"/address"
      })
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.top{
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
}
.cons{
  height: 45px;
  line-height:40px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.cons li{
  margin: 5px;
}
.router-link-active{
  color: #f00;
}
.m-cons{
  flex: 1;
  overflow: hidden;
}
</style>