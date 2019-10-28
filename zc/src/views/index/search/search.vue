<template>
  <div class="search">
      <div class="left">
        <li v-for="(ele,i) in listData&&listData" :key="i" @click="clicks(i)" :class="{active:ind===i}">
          {{ele.txts}}
        </li>
      </div>
      <div class="right">
       
        <div>
          <h4>{{listData[ind].txts}}</h4>
          <dl v-for="(item,i) in listData[ind].children&&listData[ind].children" :key="i" class="dl" @click="goToCon(item.child,ind,i)">
            <dt></dt>
            <dd>{{item.name}}</dd>
          </dl>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:"search",
  data () {
    return {
      ind:0,
    }
  },
  computed: {
    ...mapState(['listData'])
  },
  methods: {
     clicks(i){
       this.ind=i
      //  console.log(this.listData[i].children);
       
     },
     goToCon(item,ind,k){
       this.$router.push({
         name:'cons',
         params:{
           item,
           ind,k
         }
       })
     }
  }
}
</script>

<style scoped>
  .search{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .left{
    width: 100px;
    height: 100%;
    border-right: 1px solid #ccc;
  }
  .left li{
    height: 45px;
    line-height: 45px;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  .right{
    flex: 1;
  }
  .active{
    color: #f00;
  }
  dl{
    width: 80px;
    border: 1px solid #ccc;
    height:100px;
  }
  dl dt{
    width: 100%;
    height: 80%;
    border-bottom: 1px solid #ccc;
  }
</style>