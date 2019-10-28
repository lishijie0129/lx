import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import '../../mock/mock'
 class Index extends Component {
   state={
     ind:0,
     isN:false,
     sum:0
   }
  componentDidMount(){
   this.props.getDate()
   }
  clicks(ind,item){
     this.setState({ind})
     this.refs.r.scrollTop=this.refs["h"+item].offsetTop
    }
  car(){
    let {isN}=this.state
    this.setState({isN:!isN})
  }
  render() {
    // console.log(this.props);
    let {newData,carData}=this.props 
  
    let {ind,isN,sum}=this.state
    
    return <div className="index">
          <div className="top">
            <div className="left">
            {
              newData&&newData.map((ele,i)=>{
                return <li key={i} className={i===ind?"active":""}
                onClick={()=>this.clicks(i,ele.tab)}
                >{ele.tab}</li>
              })
            }
          </div>
            <div className="right"  ref="r">
            {
              newData&&newData.map((ele,i)=>{
                return <div key={i} className="l-box">
                  <h4 ref={"h"+ele.tab}>{ele.tab}</h4>
                  {
                    ele.children.map((item,j)=>{
                      return  <dl key={j}>
                              <dt></dt>
                              <dd>
                                  <h4>{item.txt}</h4>
                                  <p>{item.cons}</p>
                                  <div>
                                    <span>{item.pic}</span>
                                    {
                                      item.num>0?<div>
                                        <span>-</span><span>{item.num}</span><span onClick={()=>this.props.addnum(i,j)}>+</span>
                                        </div>:<span onClick={()=>this.props.addnum(i,j)}>+</span>
                                    }
                              </div>
                          </dd>
                    </dl>
                    })
                  }
                </div>
              })
            }
          </div>
          </div>
          <div className="bottom">
            {
              isN?<div className="b-box">
              {
                carData&&carData.map((item,j)=>{
                  return <dl key={j}>
                  <dt></dt>
                  <dd>
                      <h4>{item.txt}</h4>
                      <p>{item.cons}</p>
                      <div>
                        <span>{item.pic}</span>
                        {
                          item.num>0?<div>
                            <span>-</span><span>{item.num}</span><span>+</span>
                            </div>:<span>+</span>
                        }
                  </div>
              </dd>
        </dl>
                })
              }
            </div>:null
            }
            <button onClick={this.car.bind(this)}>购物车</button>
            <li>
            合计：<span>
              {
                carData&&carData.forEach((ele)=>{
                  sum+=ele.pic*ele.num
                }) 
              }
              {sum}
            </span>
            </li>
           
          </div>
      </div>
  }
}

let mapStateToProps=(store)=>{
  store.newData=[...store.newData]

  return {...store}
}
let mapDispatchToProps=(dispatch)=>{
   return {
     getDate(){
      dispatch((dis)=>{
        axios.get("/api/data").then(res=>{
          dis({type:"getda",data:res.data})
        })
      })
     },
     addnum(i,j){
      dispatch({type:"xgnum",i,j})
     }
      
  }
}
let Indexs=connect(mapStateToProps,mapDispatchToProps)(Index)
export default Indexs