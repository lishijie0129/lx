const routes=[
    {
      path: '/home',
      name: 'home',
      children:[
            {
            path: 'index',
            name: 'index',
            component: () => import( '../views/home/index/index.vue')
          },
          {
            path: 'book',
            name: 'book',
            component: () => import( '../views/home/book/book.vue')
          },
          {
            path: 'classList',
            name: 'classList',
            component: () => import( '../views/home/classList/classList.vue')
          },
          {
            path: 'ranking',
            name: 'ranking',
            component: () => import( '../views/home/ranking/ranking.vue')
          }
      ],
      component:()=>import("../views/home/home.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( '../views/login/login.vue')
    },
    {
        path: '/datails',
        name: 'datails',
        component: () => import('../views/datails/datails.vue')
    },
    {
        path:"/",
        redirect:"/home/index"
    }
  ]
  export default routes