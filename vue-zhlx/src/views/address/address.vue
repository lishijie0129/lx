<template>
  <div class="addresss">
      
      <div class="top">

      </div>
      <div class="cons">
          <div class="ipt">
             
          </div>
          <div class="c-cons">
              <ul v-for="(item,i) in addRessData" :key="i">
                  <li><span></span></li>
                  <li>
                      <h4>{{item.name}}</h4>
                      <p>{{item.iphone}}</p>
                      <p>{{item.addre}}</p>
                  </li>
                  <li @click="addFn({type:'bj',item})">编辑</li>
              </ul>
          </div>
      </div>
      <div class="btom" @click="addFn({type:'xz'})">
          新增地址
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"addresss",
    data(){
        return{
            
        }
    },
    methods: {
        addFn(obj){
            this.$router.push({
                name:"add",
                params:{obj}
            })
        }
    },
    computed: {
        ...mapState(['addRessData'])
    }
}
</script>

<style scoped>
    .addresss{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .top,.ipt{
        height: 45px;
        line-height: 45px;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
    .cons{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .c-cons{
        flex: 1;
    }
    .c-cons ul{
        display: flex;
        height: 80px;
        width: 100%;
        background: #ccc;
    }
    .c-cons ul li{
        flex: 1;
        justify-content: space-between;
    }
    .c-cons ul li:first-child span{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius:50%;
        background: #fff;
    }
    .btom{
        height: 45px;
        width: 100%;
        line-height: 45px;
        border-top: 1px solid #ccc;
        text-align: center;
        background: coral;
        color: #fff;
    }
</style>