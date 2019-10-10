<template>
    <div id="book">
      
       <Item v-for="(item,index) in $store.state.newData"  :key="index" :item="item">
       </Item>
    </div>
</template>

<script>
import Item from '@/components/item.vue'
export default {
    name:"book",
    components:{
        Item
    }
}
</script>

<style>

</style>