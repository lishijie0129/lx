<template>
  <div class="dateils">
      <dl>
        <dt><img :src="listData.img" alt=""></dt>
        <dd>
          
          <li>{{listData.title}}</li>
          <li>{{listData.price}}</li>
          </dd>
      </dl>
      <button @click="getData(listData)">加入购物车</button>
  </div>
</template>

<script>
export default {
  name:"dateils",
  data(){
    return {
      listData:this.$route.params.item
    }
  },methods: {
    
    getData(listData){
      this.$store.commit("getData",listData)
      this.$router.push({
        path:"/index/car"
      })
    }
  }
}
</script>

<style>

</style>