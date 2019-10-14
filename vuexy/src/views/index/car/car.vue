<template>
    <div class="car">

    </div>
</template>

<script>
import {getUserInfo,getCarList} from '@/api/api.js'
export default {
    name:"car",
    data(){
        return {

        }
    },
    async created(){
        let res=await getUserInfo();
        let resList=await getCarList({user_id:res.data.data.uid})
        console.log(resList.data.data);
        
    },
    methods:{

    }
}
</script>

<style>

</style>