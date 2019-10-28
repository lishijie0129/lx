<template>
  <div class="dateils">
      <div class="top">
         <dl>
          <dt><img :src="require('@/img/'+list.url)" alt=""></dt>
          <dd>{{list.title}}</dd>
          <li>￥{{list.pic}}</li>
        </dl>
      </div>

      <div class="btom">
          <div v-if="show" class="box">
              <dl>
                <dt><img :src="require('@/img/'+list.url)" alt=""></dt>
                <dd>
                    <li>{{list.title}}</li>
                    <div><span>￥{{list.pic}}</span> <li><span @click="reFn()">-</span><span>{{list.num}}</span><span @click="add()">+</span></li></div>
                   
                </dd>
                
            </dl>
          </div>
          <button @click="clicks()">发起拼单</button><span>总计{{sum}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"dateils",
    data () {
        return {
            list:window.localStorage.list,
            i:this.$route.params.i,
            k:this.$route.params.k,
            j:this.$route.params.j,
            show:false,
        }
    },
    computed: {
      sum(){
          return this.list.num*this.list.pic
      }  
    },
    methods: {
        clicks(){
            this.show=!this.show
            console.log(this.list);
            
        },
        add(){
            this.$store.commit("addData",{i:this.i,j:this.j,k:this.k})
        },
        reFn(){
             this.$store.commit("reData",{i:this.i,j:this.j,k:this.k})
        }
    }
}
</script>

<style scoped>
.dateils{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.btom{
    position: relative;
     width: 100%;
     height: 45px;
     line-height: 45px;
     border-top: 1px solid #ccc;
}
.top{
     flex: 1;
   }

.top dl dt {
    width: 100%;
    height: 80%;
  }
.top dl dt img{
    width: 100%;
    height: 80%;
}
.box{
    width: 100%;
    height: 500px;
    background: #ccc;
    position: absolute;
    left: 0;
    bottom: 45px;
}
.box dl{
   display: flex; 
    width: 100%;
    height: 120px;
}
.box dl dt img{
    width: 80px;
    height: 80px;
}
.box dl dd div{
    display: flex;
    justify-content: space-between;
}
</style>