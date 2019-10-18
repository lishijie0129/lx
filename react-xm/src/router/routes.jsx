import Index from "../views/index";
import Login from "../views/login/login";
import Register from "../views/register/register";
import My from "../views/index/my/my";
import Home from "../views/index/home/home";
import Dynamic from "../views/index/dynamic/dynamic";
import Board from "../views/index/board/board";
import Release from "../views/release/release";
import Vote from "../views/Vote/Vote";
const routes=[
    {
        path:"/index",
        component:Index,
        children:[
            {
                path:"/index/my",
                component:My,
            },
            {
                path:"/index/home",
                component:Home,
            },
            {
                path:"/index/dynamic",
                component:Dynamic,
            },
            {
                path:"/index/board",
                component:Board,
            },
            {
                from:"/index",
                to:"/index/home"
            }
        ]
    },{
        path:"/login",
        component:Login
    },{
        path:"/register",
        component:Register
    },{
        path:"/release",
        component:Release
    },{
        path:"/Vote",
        component:Vote
    },{
        from:"/",
        to:"/index"
    }
    
]
export default routes