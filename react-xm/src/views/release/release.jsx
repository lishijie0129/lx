import React, { Component } from 'react'
import Head from '../../components/head'
import { DatePicker, List } from 'antd-mobile';
import {voteNewvote} from '../../api/api'
export default class release extends Component {
  state={
    isSingle:0,//是否单选 0 单选 1:多选
    anonymity:0,//是否匿名 0:匿名 1:不匿名
    date:"",
    title:"",//标题
    chooseList:[],
    //userId:0, //	投票人
    //startTime:"",
    endTime:"",
    add:""
  }
  async clicks(){
    try {
      let {title,chooseList,anonymity,isSingle,date}=this.state
      //  console.log(title,chooseList,anonymity,isSingle);
     await voteNewvote({
        title,
        userId:window.localStorage.userId*1,
        chooseList,
        anonymity:anonymity*1,
        isSingle:isSingle*1,
        startTime:JSON.stringify(new Date()),
        endTime:date
      })
      this.props.history.push("/Vote");
    } catch (e) {
      console.log(e);
      
    }
    
      
  }
  changFun(e){
    let val=e.target.name
    this.setState({[val]:e.target.value})
  }
  addArr(){
    let {chooseList,add}=this.state
    chooseList.push(add)
    this.setState({chooseList})
  }
  render() {
    let {date,title,add,isSingle,anonymity,chooseList}=this.state
    console.log(date);
    
    return <div className="release">
        <Head lefts={true} tit="发起投票" {...this.props}/>
        <div className="re-con">
            <li>标题：<input type="text" name="title" value={title} onChange={(e)=>this.changFun(e)}/></li>
    
            <div>
              {
                chooseList.map((ele,i)=><li key={i}>{ele}</li>)
              }
            </div>
            <li><input type="text" name="add" value={add} onChange={(e)=>this.changFun(e)}/><button onClick={()=>this.addArr()}>添加</button></li>
            <li>
              请选择单选或单选
              <select value={isSingle} name="isSingle" onChange={(e)=>this.changFun(e)}>
                <option value="0">单选</option>
                <option value="1">多选</option>
              </select>
            </li>
            <li>
              是否匿名
              <select value={anonymity} name="anonymity" onChange={(e)=>this.changFun(e)}>
                <option value="0">匿名</option>
                <option value="1">不匿名</option>
              </select>
            </li>
            
            <DatePicker
                mode="date"
                title="截止时间"
                extra="请选择"
                value={date}
                onChange={date => this.setState({date})}
              >
                <List.Item arrow="horizontal">截止时间</List.Item>
            </DatePicker>
            <button onClick={()=>this.clicks()}>发布</button>
        </div>
      </div>
  }
}
