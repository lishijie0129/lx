import React, { Component } from 'react'
import Head from '../../components/head'
import {voteAxios} from '../../api/api'
import VoteCss from './Vote.module.scss'
export default class Vote extends Component {
  state={
    tablist:[{
      txt:"全部"
    },{
      txt:"已结束"
    },{
      txt:"进行中"
    }],
    list:[],
    newList:[],
    ind:0
  }
  render() {
    let {tablist,list,ind} =this.state
    return <div className="Vote">
        <Head lefts={true} tit='沐恩' right="发起投票" {...this.props}/>
        <div className={`${VoteCss['tits']}`}>
            <ul>
              {
                tablist.map((item,i)=><li key={i} className={`${VoteCss[ind===i?"active":""]}`} onClick={()=>this.clicks(i)}>{item.txt}</li>)
              }
            </ul>
        </div>
        <div className={`${VoteCss['cons']}`}>
              {
                list.map((item,i)=><dl key={i}>
                  <dt></dt>
                  <dd>
                    <li><span>{item.title}</span><span>{item.endTime}</span></li>
                    <li><span></span><span>{item.isSingle?"多选":"单选"}</span></li>
                  </dd>
                </dl>)
              }
        </div>
      </div>
  }
  async componentDidMount(){
    let res=await voteAxios()
    console.log(res.data);
   this.setState({list:res.data,newList:res.data}) 
  }
  clicks(ind){
    let {list,newList}=this.state
    this.setState({ind})
    if(ind===0){
      list=newList
      this.setState({list})
    }else if(ind===1){
        let time=new Date().getTime()
        list=newList.filter((ele,i)=>new Date(ele.endTime).getTime()<time)
        this.setState({list})
        //console.log(list);
    }else{
      let time=new Date().getTime()
        list=newList.filter((ele,i)=>new Date(ele.endTime).getTime()>time)
        this.setState({list})
        // console.log(list);
    }
  }
}
