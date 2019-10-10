const routes=[
    {
        path: '/index',
        name: 'index',
        children:[
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/index/home/home.vue')
            },
            {
                path: 'car',
                name: 'car',
                component: () => import('@/views/index/car/car.vue')
            },
            {
                path: 'classify',
                name: 'classify',
                component: () => import('@/views/index/classify/classify.vue')
            },
            {
                path: 'my',
                name: 'my',
                component: () => import('@/views/index/my/my.vue')
            }
        ],
        component: () => import('@/views/index/index.vue')
    },
    {
        path: '/datails',
        name: 'datails',
        component: () => import('@/views/datails/datails.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path:"/",
        redirect:"/index/home"
    }
]
export default routes