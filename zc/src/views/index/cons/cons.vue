<template>
  <div class="cons">
       <ul>
        <li v-for="(ele,i) in list" :key="i" @click="clicks(i)" :class="{active:ind===i}">{{ele}}</li>
      </ul>
      <div>
        <dl v-for="(ele,i) in listData" :key="i" @click="gotoDateil(ele,i)">
          <dt><img :src="require('@/img/'+ele.url)" alt=""></dt>
          <dd>{{ele.title}}</dd>
          <li>￥{{ele.pic}}</li>
        </dl>
      </div>
  </div>
</template>

<script>
export default {
  name:"cons",
  data () {
    return {
      list:["全部","连衣裙","T恤"],
      listData:this.$route.params.item,
      ind:0,
      j:this.$route.params.ind,
      k:this.$route.params.k
    }
  },methods: {
     clicks(i){
      this.ind=i;
    },
    gotoDateil(item,i){
      // console.log(this.j,this.k);
      this.$store.commit("sumData",{i,j:this.j,k:this.k})
       this.$router.push({
         name:'dateils',
         params:{
           item,
           i,j:this.j,k:this.k
         }
       })
    }
  }
}
</script>

<style scoped>
  .cons{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
   .cons>ul{
     display: flex;
     width: 100%;
     height: 45px;
     line-height: 45px;
     border-bottom: 1px solid #ccc;
   }
   .cons>ul li{
     flex: 1;
     text-align: center;
   }
   .cons>div{
     display: flex;
     flex-wrap: wrap;
     flex: 1;
     overflow: auto;
   }
   .active{
    color: #f00;
  }
  dl{
    width: 49%;
    height: 300px;
    border: 1px solid #ccc;
    margin-top: 15px;
  }
  dl dt {
    width: 100%;
    height: 80%;
  }
   dl dt img{
      width: 100%;
    height: 80%;
   }
</style>