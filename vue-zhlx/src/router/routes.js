
const routes = [
  {
    path: '/index',
    name: 'index',
    children:[
        {
            path: 'home',
            name: 'home',
            children:[
                {
                    path:'super',
                    name:"super",
                    component:()=>import('@/views/index/home/super/super')
                },
                {
                    path:'selection',
                    name:"selection",
                    component:()=>import('@/views/index/home/selection/selection')
                },
                {
                    path:'/index/home',
                    redirect:"/index/home/super"
                }
            ],
            component: () => import('@/views/index/home/home')
        },
        {
            path: 'classify',
            name: 'classify',
            component: () => import('@/views/index/classify/classify')
        },
        {
            path: 'car',
            name: 'car',
            component: () => import('@/views/index/car/car')
        },
        {
            path: 'my',
            name: 'my',
            component: () => import('@/views/index/my/my')
        },
        {
            path:'/index',
            redirect:"/index/home"
        }
    ],
    component: ()=>import("@/views/index/index")
  },
  {
    path: '/dateil',
    name: 'dateil',
    component: () => import('@/views/dateil/dateil')
  },{
    path: '/address',
    name: 'address',
    component: () => import('@/views/address/address')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/add/add')
  },
  {
    path:'/',
    redirect:"/index"
    }
]
export default routes