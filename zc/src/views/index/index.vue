<template>
  <div class="index">
    <div>
      <router-view/>
    </div>
      <ul>
        <li v-for="(ele,i) in list" :key="i" @click="clicks(i)" :class="{active:ind===i}">{{ele}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
import '../../mock/mock'
import {mapMutations} from 'vuex'
export default {
  name:"index",
  data(){
    return {
      list:["首页","推荐","搜索","聊天","我的"],
      ind:2
    }
  },
  async created () {
    await axios.get("/data").then(res=>{
      console.log(res.data);
      this.getData(res.data)
      // window.localStorage.data=JSON.stringify(res.data)
    })
  },
  methods: {
     ...mapMutations(['getData']),
    clicks(i){
      this.ind=i;
    }
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
 
  .index>ul{
    display: flex;
    height: 45px;
    line-height: 45px;
    width: 100%;
    border-top: 1px solid #ccc;
  }
  .index>ul li{
    flex: 1;
    text-align: center;
  }
  .active{
    color: #f00;
  }
 .index>div{
    flex: 1;
    overflow: hidden;
  }
</style>