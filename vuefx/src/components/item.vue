<template>
    <dl @click="clicks(item)">
        <dt></dt>
        <dd>
            <li>书名：{{item.bookName}}</li>
            <li>作者：{{item.authorName}}</li>
            <li>简介：{{item.description}}</li>
            <li><slot name="abs"></slot></li>
        </dd>
    </dl>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true,
            default:()=>{
                return {};
            }
        }
    },
    methods:{
        clicks(obj){
            this.$router.push({
                name:"datails",
                params:{obj}
            })
        }
    }
}
</script>

<style scoped>
dl{
    display: flex;
    width: 100%;
    height:150px;
    margin-top: 15px;
}
dt{
    width: 30%;
    height: 100%;
    border: 1px solid #ccc;
}
dd{
    width: 70%;
    height: 100%;
}
dd li{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>