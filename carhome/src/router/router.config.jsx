import Index from '../view/index/index'
import Login from '../view/login/login'
import Search from '../view/search/search'
import Home from '../view/index/home/home'
import Car from '../view/index/car/car'
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
        type:"redirect",
        from:"/",
        to:"/index/home"
    }
]
export default routerConfig