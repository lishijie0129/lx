import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class routerView extends Component {
  render() {
      let {routes}=this.props
      let arrRoute=routes&&routes.filter(ele=>!ele.to)
      let arrRedirect=routes&&routes.filter(ele=>ele.to).map((ele,i)=><Redirect key={i} from={ele.from} to={ele.to}></Redirect>)
    return <Switch>
          {
              arrRoute.map((ele,i)=><Route key={i} path={ele.path} render={(props)=>{
                  return <ele.conponent {...props} children={ele.children}/>
              }}></Route>).concat(arrRedirect)
          }
      </Switch>
    
  }
}
