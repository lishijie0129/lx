import React, { Component } from 'react'
import Heads from './head.module.css'
export default class head extends Component {
    static defaultProps={
        lefts:false,
        tit:'沐恩',
        right:""
    }
    clicks(){
      this.props.history.go(-1)
    }
    goToRele(){
      this.props.history.push("/release")
    }
    render() {
    //console.log(this.props);
    let {lefts,tit,right}=this.props
    return <div className={Heads.header} >
        {lefts? <li onClick={()=>this.clicks()}>&lt;</li>:null}
            <h4>{tit}</h4>
            <li onClick={()=>this.goToRele()}>{right}</li>
      </div>
  }
}
