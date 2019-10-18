import React from 'react'
import Loadable from 'react-loadable'
// import Index from '../view/index/index'
// import Login from '../view/login/login'
// import My from '../view/my/my'
// import Search from '../view/search/search'
// import Home from '../view/index/home/home'
// import Car from '../view/index/car/car'
function Loading(){
    return <div>loading.......</div>
}
let Index=Loadable({
    loader:()=>import('@/view/index/index'),
    loading:Loading
})
let Login=Loadable({
    loader:()=>import('@/view/login/login'),
    loading:Loading
})
let My=Loadable({
    loader:()=>import('@/view/my/my'),
    loading:Loading
})
let Search=Loadable({
    loader:()=>import('@/view/search/search'),
    loading:Loading
})
let Home=Loadable({
    loader:()=>import('@/view/index/home/home'),
    loading:Loading
})
let Car=Loadable({
    loader:()=>import('@/view/index/car/car'),
    loading:Loading
})
let Addre=Loadable({
    loader:()=>import('@/view/index/addre/addre'),
    loading:Loading
})
const routerConfig=[
    {
        type:"route",
        path:"/index",
        component:Index,
        routers:[
            {
                type:"route",
                path:"/index/home",
                component:Home
            },
            {
                type:'route',
                path:"/index/car",
                component:Car
            },
            {
                type:'route',
                path:"/index/addre",
                component:Addre
            },
            {
                type:"redirect",
                from:"/index",
                to:"/index/home"
            }
        ]
    },
    {
        type:"route",
        path:"/login",
        component:Login
    },
    {
        type:"route",
        path:"/search",
        component:Search
    },
    {
        type:"route",
        path:"/my",
        component:My
    },
    {
        type:"redirect",
        from:"/",
        to:"/index"
    }
]
export default routerConfig