import React from 'react'
import axios from 'axios'
import '@/mock/mock.js'
class Car extends React.Component{
    state={
        list:{}
    }
    componentDidMount(){
        
        axios.get("api/carData").then(res=>{
            let {list}=this.state
            list=res.data
            this.setState({list})
        })
    }
    clicks(item){
        //console.log(this.refs["tit"+item].offsetTop);
        document.documentElement.scrollTop=this.refs["tit"+item].offsetTop
        
    }
    render(){
        let {list}=this.state;
        console.log(this.props);
        
        return <div className="car">
            {
                Object.keys(list&&list).map((item,i)=>{
                    return  <div key={i} className="l-list"><h4 ref={"tit"+item}>{item}</h4>
                    {
                        list[item].map((ele,k)=> <div className="dls" key={k}>
                        <img src={ele.CoverPhoto} alt=""/>
                        <li>{ele.Name}</li>
                    </div>)
                    }</div>
                })
            }
           
          <div className="r-list">
            {
               Object.keys(list&&list).map((item,i)=><li key={i} onClick={()=>{this.clicks(item)}}>{item}</li>)
            }
          </div>
        </div>
    }
}
export default Car 