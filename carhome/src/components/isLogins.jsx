import React, { Component } from 'react'
//高阶组件  路由守卫
function isLogins(My){
    class isLogin extends Component{
      state={
        isgo:false
      }
      render(){
        let {isgo}=this.state
      return isgo?<My {...this.props}/>:null
      }
      componentDidMount(){
        if(window.localStorage.user){
          this.setState({isgo:true})
        }else{
          this.props.history.push("/login")
        }
      }
  }
  return isLogin
}
export default isLogins