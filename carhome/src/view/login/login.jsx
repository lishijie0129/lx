import React from 'react'
import axios from 'axios'
class Login extends React.Component{
    state={
        text:"",
        pwd:""
    }
    changeFun=(e)=>{
       let iptText=e.target.name
       this.setState({[iptText]:e.target.value})
    }  
    clicks=(text,pwd)=>{
        axios.post("/api/textpwd",{text,pwd}).then(res=>{
            // console.log(res);
            if(res.data.code===1){
                window.localStorage.user=text
                this.props.history.go(-1)
            }else{
                alert(res.data.msg)
            }
        })
    } 
    render(){
        let {text,pwd}=this.state
      
       
        return <div>
            登录
            <li>账号：<input type="text" name="text" onChange={(e)=>this.changeFun(e)}/></li>
            <li>密码：<input type="password" name="pwd"  onChange={(e)=>this.changeFun(e)}/></li>
            <button onClick={()=>this.clicks(text,pwd)}>登录</button>
        </div>
    }
}
export default Login 