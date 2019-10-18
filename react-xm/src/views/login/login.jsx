import React, { Component } from 'react'
import {logins} from '../../api/api'
export default class login extends Component {
  state={
    userName:"",
    password:""
  }
  changeFun(e){
    this.setState({[e.target.name]:e.target.value})
  }
  async clicks(){
    let {userName,password}=this.state;
   
    let res = await logins({userName,password})
    if(res.data.code===1){
      window.localStorage.token=res.data.token;
      window.localStorage.userId=res.data.userId;
      this.props.history.go(-1)
    }
    
    
  }
  registerClick(){
    this.props.history.push("/register")
  }
  render() {
    let {userName,password}=this.state
    return <div>
        <li>用户名：<input type="text" value={userName} name="userName" onChange={(e)=>this.changeFun(e)}/></li>
        <li>密码：<input type="password" value={password} name="password" onChange={(e)=>this.changeFun(e)}/></li>
        <p onClick={()=>this.registerClick()}>注册</p>
        <button onClick={()=>this.clicks()}>登录</button>
      </div>
  }
}
