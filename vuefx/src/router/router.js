import Vue from 'vue'
import Router from 'vue-router'
import routes from '../router/routes'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
  // console.log(window.localStorage.getItem("name"));
    if(to.matched.some(item=>item.meta.requirePath)){
      if(!window.localStorage.getItem("name")){
        next({
          path:"/login",
          query:{redirect:to.fullPath}
        })
      }else{
        next();
      }
      
    }else{
      next();
    }
  
})
export default router
