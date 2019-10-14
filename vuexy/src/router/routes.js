const routes=[
    {
        path: '/index',
        name: 'index',
        children:[
            {
                path: 'home',
                name: 'home',
                meta:{requirePath:false},
                component: () => import('@/views/index/home/home.vue')
            },
            {
                path: 'car',
                name: 'car',
                meta:{requirePath:true},
                component: () => import('@/views/index/car/car.vue')
            },
            {
                path: 'classify',
                name: 'classify',
                meta:{requirePath:false},
                component: () => import('@/views/index/classify/classify.vue')
            },
            {
                path: 'my',
                name: 'my',
                meta:{requirePath:false},
                component: () => import('@/views/index/my/my.vue')
            }
        ],
        component: () => import('@/views/index/index.vue')
    },
    {
        path: '/datails',
        name: 'datails',
        meta:{requirePath:false},
        component: () => import('@/views/datails/datails.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta:{requirePath:false},
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta:{requirePath:false},
        component: () => import('@/views/register/register.vue')
    },
    {
        path:"/",
        redirect:"/index/home"
    }
]
export default routes