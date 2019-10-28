import React from 'react'
import Loadable from 'react-loadable'
// import Index from '../views/index/index'
// import Home from '../views/index/home/home'
// import My from '../views/index/my/my'
// import Rank from '../views/index/rank/rank'
function Loading(){
    return <div>loading....</div>
}
let Index=Loadable({
    loader:()=>import("../views/index/index"),
    loading:Loading
})
let Home=Loadable({
    loader:()=>import("../views/index/home/home"),
    loading:Loading
})
let My=Loadable({
    loader:()=>import("../views/index/my/my"),
    loading:Loading
})
let Rank=Loadable({
    loader:()=>import("../views/index/rank/rank"),
    loading:Loading
})
const routes=[
    {
        path:"/index",
        component:Index,
        children:[
            {
                path:"/index/home",
                component:Home
            },
            {
                path:"/index/my",
                component:My
            },
            {
                path:"/index/rank",
                component:Rank
            },
            {
                from:"/index",
                to:"/index/home"
            }
        ]
    },
    {
        from:"/",
        to:"/index"
    }
]
export default routes