import React, { Component } from 'react'
import Axios from 'axios'
import '../../../mock/mock'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
class Dican extends Component {
  state={
    list:[],
    ind:0,
    scrollH:[]
  }
  render() {
    let {list,ind}=this.state
    return <div className="diCan">
        <div className="left">
            {
              list&&list.map((ele,i)=><li key={i} className={ind===i?"active":""} onClick={()=>this.clicks(i)}>{ele.name}</li>)
            }
        </div>
        <div className="right">
          <div ref="right">
          {
              list&&list.map((ele,i)=><div key={i} className={`scr${i}`}>
                  <h4>{ele.name}</h4>
                  {
                    ele.foods.map((item,j)=><dl key={j}>
                    <dt><img src={item.image} alt=""/></dt>
                    <dd>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <li><span>{item.price}</span>{item.nums<1?<span onClick={()=>this.add(i,j,item)}>+</span>:
                      <div><span>-</span><span>{item.nums}</span><span onClick={()=>this.add(i,j,item)}>+</span></div>}</li>
                    </dd>
                  </dl>)
                  }
              </div>) 
            }
          </div>
            
        </div>
      </div>
    
  }
  async componentDidMount(){
    let {scrollH}=this.state
    await Axios.get("/data").then(res=>{
    
     res.data.goods.forEach((ele)=>{
       ele.num=0
       ele.foods.forEach((item)=>item.nums=0)
     })
       // console.log(res.data.goods); 
        this.setState({list:res.data.goods})
    })
    this.scroll=new BScroll(".right",{
      click:true,
      probeType:2
    })
    this.scroll.on("scroll",({y})=>{
      let scrollY=Math.abs(y)
      //console.log(scrollY,"y");
      scrollH.forEach((ele,i)=>{
        if(ele<scrollY&&scrollY<scrollH[i+1]){
          this.setState({ind:i})
        }
      })
      
    })
    let childs=[...this.refs.right.children]
    childs.forEach((ele)=>{
     scrollH.push(ele.offsetTop-46)
    })
    scrollH.push(childs[childs.length-1].offsetHeight+scrollH[scrollH.length-1])
    //console.log(scrollH[scrollH.length-1]);
    //console.log(scrollH);
  }
  clicks(ind){
    this.setState({ind})
    //console.log(document.querySelector(".scr"+ind));
    this.scroll.scrollToElement('.scr'+ind,100)
  }
  add(i,j,item){
    let {list}=this.state;
    list[i].foods[j].nums++;
    list=[...this.state.list];
    this.setState({list});
    this.props.getData(item)
    // console.log(list);
    // console.log(list[i].foods[j].nums);
    
  }
}
let mapStateToProps=(store)=>{
// console.log(store);
  let {carData}=store
  return {...carData}
}
let mapDispatchToProps=(dispatch)=>{
  return {
    getData(item){
      dispatch({type:"add",item})
    }
  }
}
Dican=connect(mapStateToProps,mapDispatchToProps)(Dican)
export default Dican