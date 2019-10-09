const routes=[
    {
      path: '/home',
      name: 'home',
      children:[
            {
            path: 'index',
            name: 'index',
            meta:{requirePath:false},
            component: () => import( '../views/home/index/index.vue')
          },
          {
            path: 'book',
            name: 'book',
            meta:{requirePath:true},
            component: () => import( '../views/home/book/book.vue')
          },
          {
            path: 'classList',
            name: 'classList',
            meta:{requirePath:false},
            component: () => import( '../views/home/classList/classList.vue')
          },
          {
            path: 'ranking',
            name: 'ranking',
            meta:{requirePath:false},
            component: () => import( '../views/home/ranking/ranking.vue')
          }
      ],
      meta:{requirePath:false},
      component:()=>import("../views/home/home.vue")
    },
    {
      path: '/login',
      name: 'login',
      meta:{requirePath:false},
      component: () => import( '../views/login/login.vue')
    },
    {
        path: '/datails/:obj',
        name: 'datails',
        meta:{requirePath:false},
        component: () => import('../views/datails/datails.vue')
    },
    {
        path:"/",
        redirect:"/home/index",
        meta:{requirePath:false}
    }
  ]
  export default routes