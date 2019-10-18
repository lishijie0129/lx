import React, { Component } from 'react'
import isLogin from '../../../isLogin/isLogin'
import Swipers from '../../../components/swipers'
class home extends Component {
  state={
    list:[
      {
        txt:"沐恩动态"
      },
      {
        txt:"个人动态"
      },
      {
        txt:"列表"
      },
      {
        txt:"小礼品"
      },
      {
        txt:"留言"
      },
      {
        txt:"奉献"
      },
      {
        txt:"投票",
        url:"/Vote"
      },
      {
        txt:"小组"
      }
    ]
  }
  clicks(url){
    //console.log(url);
    this.props.history.push(url)
  }
  render() {
    let {list}=this.state
    return <div className="home">
        <Swipers />
        <div className="lists">
          {
            list.map((item,i)=><dl key={i} onClick={item.txt==="投票"?()=>this.clicks(item.url):null}>
              <dt><img src={'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'} alt=""/></dt>
              <dd>{item.txt}</dd>
            </dl>)
          }
        </div>
      </div>
  }
}
export default isLogin(home)
