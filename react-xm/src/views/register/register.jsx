import React, { Component } from 'react'
import {registers} from '../../api/api'
import {Toast} from 'antd-mobile'
export default class register extends Component {
  state={
    userName:"",
    password:"",
    realName:""
  }
  changeFun(e){
    this.setState({[e.target.name]:e.target.value})
  }
  async clicks(){
    let {userName,password,realName}=this.state
   
    try{
       let res=await registers({userName,password,realName})
      if(res.data.code){
        this.props.history.push("/login");
      }
    }catch(e){
      //console.log(e.response.data);
      Toast.info(e.response.data.message, 2)
    }
   
   
  }
  render() {
    let {userName,password,realName}=this.state
    return <div>
          <li>用户名<input type="text" value={userName} name="userName" onChange={(e)=>this.changeFun(e)}/></li>
          <li>密码<input type="password" value={password} name="password" onChange={(e)=>this.changeFun(e)}/></li>
          <li>姓名<input type="text" value={realName} name="realName" onChange={(e)=>this.changeFun(e)}/></li>
          <button onClick={()=>this.clicks()}>注册</button>
      </div>
  }
}
