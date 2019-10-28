import React, { Component } from 'react'
import RouterView from '../../router/routerView'
export default class index extends Component {
  state={
    list:[
      {
        txt:"首页",
        url:"/index/home"
      },
      {
        txt:"排行",
        url:"/index/rank"
      },
      {
        txt:"我的",
        url:"/index/my"
      }
    ],
    ind:0
  }
  clicks(url,ind){
    this.setState({ind})
    this.props.history.push(url)
  }
  render() {
    let {children}=this.props
    let {list,ind}=this.state
    return <div className="index">
        <div className="cons">
          <RouterView routes={children}/>
        </div>
        <div className="bottoms">
            {
                list.map((ele,i)=><li className={i===ind?"active":""} key={i} onClick={()=>this.clicks(ele.url,i)}>{ele.txt}</li>)
            }
        </div>
      </div>
  }
}
