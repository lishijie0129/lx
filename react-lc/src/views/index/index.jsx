import React, { Component } from 'react'
import RouterView from '../../router/routerView'
import {connect} from 'react-redux'
class Index extends Component {
  state={
    isN:false
  }
  render() {
      let {children,carData}=this.props
      
      let {isN}=this.state
    return (
      <div className="index">
          <ul className="top">
            <li>点餐</li>
            <li>评价</li>
            <li>商家</li>
          </ul>
          
            <RouterView routes={children}/>
         <li>
           {
             isN?<div className="box">
                {
                    carData.map((item,j)=><dl key={j}>
                    <dt><img src={item.image} alt=""/></dt>
                    <dd>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <li><span>{item.price}</span><div><span>-</span><span>{item.nums}</span><span >+</span></div></li>
                    </dd>
                  </dl>)
                  }
             </div>:null
           }
           
            <span onClick={()=>this.car()}>购物车</span>
         </li>
          
      </div>
    )
  }
  car(){
    let {isN}=this.state
    this.setState({isN:!isN})
  }
}
let mapStateToProps=(store)=>{
  console.log(store);
   let {carData}=store
   return {carData}
 }
 let mapDispatchToProps=(dispatch)=>{
   return {
    
   }
 }
 Index=connect(mapStateToProps,mapDispatchToProps)(Index)

export default Index