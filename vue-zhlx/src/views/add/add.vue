<template>
   <div class="add">
       <span @click="clicks">返回</span>
       <ul>
           <li><input type="text" v-model="name" placeholder="联系人"></li>
           <li><input type="text" v-model="iphone" placeholder="手机号"></li>
           <li><input type="text" v-model="addre" placeholder="地址"></li>
           <li @click="getAdds({id,name,iphone,addre})">完成</li>
       </ul>
   </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:"add",
    data(){
        return {
            name:"",
            iphone:'',
            addre:"",
            id:new Date().getTime()
        }
    },
    created () {
        if(this.$route.params.obj.type==="bj"){
            let items=this.$route.params.obj.item
                    if(items){
                        this.name=items.name
                        this.iphone=items.iphone
                        this.addre=items.addre
                        this.id=items.id
                    }
        }
        

    },
    computed: {
        ...mapState(['addRessData'])  
    },
    methods: {
        
        clicks(){
            this.$router.go(-1)
        },
        getAdds(obj){
            let {type}=this.$route.params.obj
            console.log();
            
            if(type==="xz"){
                let {name,iphone,addre}=this
               
                if(name===""||iphone===""||addre===""){
                    console.log(name,iphone,addre);
                    this.$alerts("不能为空",1000)
                }else{
                     this.$store.commit('getAdd', obj)
                    this.$router.push({
                        path:"/address"
                    })
                }

            }else{
                 this.$store.commit('xgAdd', obj)
                 this.$router.push({
                     path:"/address"
                 })
                 console.log(this.addRessData);
                 
            }
            
           
        }
    }
}
</script>

<style scoped>
    .add{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .add ul{
        width: 100%;
        height: 100%;
    }
    .add>ul>li{
        height: 44px;
        width: 100%;
        text-align: center;
        
    }
    .add>ul>li:last-child{
        background: coral;
        line-height: 44px;
        color: #fff;
    }
    .add>ul>li>input{
        border: 1px solid #ccc;
        height: 30px;
        width: 60%;
        background: #ccc;
        color: coral;
    }
</style>