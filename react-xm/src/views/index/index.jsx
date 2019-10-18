import React, { Component } from 'react'
import RouterView from '../../router/routerView'
import Head from '../../components/head'
export default class index extends Component {
  state={
    ind:0,
    lists:[
      {
        txt:"首页",
        url:"/index/home",
        imgs:"6.gif"
      },
      {
        txt:"动态",
        url:"/index/dynamic",
        imgs:"6.gif"
      },{
        txt:"留言板",
        url:"/index/board",
        imgs:"6.gif"
      },{
        txt:"我的",
        url:"/index/my",
        imgs:"6.gif"
      }

    ]
  }
  clicks(i,url){
    this.setState({ind:i});
    this.props.history.push(url)
  }
  render() {
      let {children}=this.props
      let {lists,ind}=this.state
    return  <div className="index">
      <div className="header">
         <Head lefts={false} tit="沐恩" />
      </div>
        <div className="cons">
          <RouterView routes={children}/>
        </div>
          
        <div className="tabs">
          {
            lists.map((item,i)=><dl key={i} onClick={()=>this.clicks(i,item.url)}>
              <dt><img src={require("../../img/"+item.imgs)} alt=""/></dt>
              <dd className={ind===i?"active":""}>{item.txt}</dd>
            </dl>)
          }
         
        </div>
      </div>
  }
}
