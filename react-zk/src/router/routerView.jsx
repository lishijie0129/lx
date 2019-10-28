import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
export default class routerView extends Component {
  render() {
      let {routes}=this.props
      let routeArr=routes.filter((ele)=>!ele.to)
      let rediectArr=routes.filter((ele,)=>ele.to).map((item,i)=><Redirect key={i} from={item.from} to={item.to}></Redirect>)
    return <Switch>
            {
                routeArr&&routeArr.map((ele,i)=><Route path={ele.path} key={i} render={(props)=>{
                    return <ele.component {...props} children={ele.children}/>
                }}></Route>).concat(rediectArr)
            }
      </Switch>
  }
}
