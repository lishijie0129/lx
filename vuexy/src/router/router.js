import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(item=>item.meta.requirePath)){
    if(!window.localStorage.texts){
      next({
        path:"/login",
        query:{
           redirect:to.fullPath
        }
      })
    }else{
      next();
    }
  }else{
    next();
  }
})
export default router
