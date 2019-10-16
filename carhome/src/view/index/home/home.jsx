import React from 'react'
import axios from 'axios'
import '@/mock/mock'
class Home extends React.Component{
    state={
        list:[]
    }
    componentDidMount(){
        axios.get("api/homeData").then(res=>{
            // console.log(res.data.list);
            this.setState({list:res.data.list})
        })
    }
    render(){
        let {list}=this.state
        return <div className="home">
            {
                list&&list.map((ele,i)=><dl key={i}>
                    <dt><img src={ele.pic} alt=""/></dt>
                    <dd>{ele.title}</dd>
                </dl>)
            }
        </div>
    }
}
export default Home 