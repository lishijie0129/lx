<template>
    <div id="datails">
        详情
        <Item :item="$route.params.obj">
                <template v-slot:abs>
                     <button @click.stop="clicks($route.params.obj)">书架</button>
                </template>
        </Item>
    </div>
</template>

<script>
import Item from '@/components/item.vue'
import {mapMutations} from 'vuex'
export default {
    name:"datails",
    components:{
        Item
    },
    methods:{ 
        ...mapMutations(['Data']),
        clicks(obj){
            
            
            this.Data(obj)
            this.$router.push({
                name:"book"
            })
        }
    }
}
</script>

<style>

</style>