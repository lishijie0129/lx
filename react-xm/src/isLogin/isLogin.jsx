import React, { Component } from 'react'
//路由守卫
function isLogin(Con){
    return class isLogin extends Component {
        state={
            isflag:false
        }
        componentDidMount(){
            if(window.localStorage.token){
                this.setState({isflag:true})
            }else{
                this.props.history.push('/login');
            }
        }
        render() {
        return this.state.isflag?<Con {...this.props}/>:null
      }
      
    }
    
}
export default isLogin