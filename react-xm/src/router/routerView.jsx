import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
function RouterView(props){
    let {routes}=props
    let routeArr=routes&&routes.filter((ele)=>!ele.to)
    let redirectArr=routes&&routes.filter((ele)=>ele.to).map((ele,i)=><Redirect key={i} from={ele.from} to={ele.to}></Redirect>)
    return <Switch>
        {   
            routeArr&&routeArr.map((ele,i)=><Route key={i} path={ele.path} render={(props)=>{
                return <ele.component {...props} children={ele.children}/>
            }}></Route>).concat(redirectArr)
        }
    </Switch>
}
export default RouterView