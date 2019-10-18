import React, { Component } from 'react'
import {connect} from 'react-redux'
class addre extends Component {
  render() {
      let {count}=this.props
      
    return <div>
            <button onClick={()=>this.props.add()}>+</button><span>{count}</span><button onClick={()=>this.props.del()}>-</button>
      </div>
  }
 
}
let mapStateToProps=(store)=>{
    console.log(store);
    let {count}=store
    return {
        count
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        add(){
            dispatch({type:"add"})
        },
        del(){
            dispatch({type:"del"})
        }
    }
}
let addres=connect(mapStateToProps,mapDispatchToProps)(addre)
export default addres