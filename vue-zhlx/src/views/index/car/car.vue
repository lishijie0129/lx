<template>
  <div class="car">
    <div>
      <div v-for="(item,i) in carData" :key="i" class="cons">
       <li><span :class="{active:item.isflag===true}" @click="clicks(i)"></span></li>
       <li>
         <h4>{{item.title}}</h4>
         <p>{{item.price}}</p>
       </li>
       <li><span @click="reFn(i)">-</span><span>{{item.num}}</span><span @click="addFn(i)">+</span></li>
     </div>
    </div>
     
     <div class="sums">
       <li><span :class="{active:isN===true}"></span>全选</li>
       <li>合计：<span>{{sumData}}</span></li>
     </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
  name:"car",
  
  data(){
    return {
        
    }
  },
  computed:{
      
        ...mapState(['carData','isN']),
        ...mapGetters(['sumData'])
  },
  created () {
      
  },
  methods: {
     ...mapMutations(['clicks']),
     ...mapMutations(['addFn']),
     ...mapMutations(['reFn'])
  }
}
</script>

<style scoped>  
  .car{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .car div:first-child{
    flex: 1;
  }
  .cons{
    display: flex;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ccc;
  }
  .cons li{
    flex: 1;
    text-align: center;
  }
  .cons li:first-child,.cons li:last-child{
    line-height: 80px;
  }
  .cons li:first-child span,.sums li:first-child span{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:1px solid #ccc;
  }
  .active{
    background: #0f0;
  }
  .sums{
    display: flex;
    height: 44px;
    width: 100%;
    line-height: 44px;
    border-bottom: 1px solid #ccc;
  }
  
</style>