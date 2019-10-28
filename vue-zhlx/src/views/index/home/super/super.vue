<template>
  <div class="super">
      <div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,i) in imgData" :key="i">
                        <img :src="item.img" alt="">
                    </div>
                </div>
            </div>
        <div class="cons">
                <dl v-for="(item,i) in listDatas&&listDatas" :key="i" @click="goToDateil(item)">
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd>
                        <li>{{item.title}}</li>
                        <li><span>￥{{item.price}}</span><span @click.stop="getData(item)">+</span></li>
                    </dd>
                </dl>
                
        </div>
        <div v-if="show">------------------到底了---------------------</div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {imgData,listData} from '@/api/api'
import {mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
    name:"super",
    data(){
        return {
            imgData:[],
            page:1,
            limit:10,
            listDatas:[],
            show:false
        }
    },
    computed:{
    },
     async created(){
        await imgData().then(res=>{
            this.imgData=res.data
            })
        this.axioslist()
         
            this.$nextTick(()=>{
            new Swiper(".swiper-container",{
                loop:true,
                autoplay:{
                    delay:1000
                }
            })
        })
           //下拉加载 上拉刷新  BScroll 和 Swiper 最好放在this.$textTick()
            this.$nextTick(()=>{
                this.scroll=new BScroll(".super",{
                    click:true,
                    pullUpLoad:{
                        threshold: -50
                    },
                    pullDownRefresh: {
                        threshold: 50,
                    }
                })
                this.scroll.on("pullingUp",()=>{
                    console.log('上拉');
                    this.page++;
                    this.axioslist()
                })
                this.scroll.on("pullingDown",()=>{
                    console.log('下拉');
                        this.page=1
                        this.listDatas=[]
                        this.axioslist()
                })
                
        })
       
      
    },
    methods:{
        ...mapMutations(['getData']),
        async axioslist(){
            if(this.page<=5){
                await listData({page:this.page,limit:this.limit}).then(res=>{
                this.listDatas=[...this.listDatas,...res.data.list]
                // console.log( this.listDatas.length,this.page);
                //console.log(res.data,'2');
                //console.log(res.data.list,'11');
                this.scroll.finishPullUp();//每次上拉接受必须调用此方法
                this.scroll.finishPullDown()
                })
            }else{
                this.show=true
            }
            
        },
        goToDateil(item){
            this.$router.push({
                name:"dateil",
                params:{item}
            })
        }
    }
    
}
</script>

<style scoped>
.super{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.swiper-slide img{
    width: 100%;
    height: 150px;
}
.cons{
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}
.cons dl{
    flex-shrink: 0;
    width: 33%;
}
.cons dl dd li span:first-child{
   color: #f00;
}
.cons dl dd li:last-child{
    display: flex;
    justify-content: space-between;
}
.cons dl dd li span{
    margin: 0 15px;
}
</style>