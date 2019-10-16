import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
class RouterView extends Component{
    render(){
        let {routes}=this.props
        let routeArr=routes&&routes.filter((ele,i)=>!ele.to)
        let redirectArr=routes&&routes.filter((ele,i)=>ele.to).map((ele,i)=><Redirect key={i} from={ele.from} to={ele.to}></Redirect>)
        return <Switch>
            {
                routeArr&&routeArr.map((ele,i)=>{
                    return <Route key={i} path={ele.path} render={(props)=>{
                        return <ele.component {...props} routers={ele.routers}/>
                    }}></Route>
                }).concat(redirectArr)
            }
        </Switch>
    }
}
export default RouterView