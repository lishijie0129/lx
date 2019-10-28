const routes=[
    {
        path: '/index',
        name: 'index',
        children:[
            {
                path:"search",
                name:"search",
                component:()=>import("@/views/index/search/search")
            },{
                path:"cons",
                name:"cons",
                component:()=>import("@/views/index/cons/cons")
            },{
                path: '/index',
                redirect: "/index/search"
              
            }

        ],
        component:()=>import("@/views/index/index")
    },
    {
        path: '/dateils',
        name: 'dateils',
        component:()=>import("@/views/dateils/dateils")
    },
    {
        path: '/',
        redirect: "/index"
      
    }
]
export default routes