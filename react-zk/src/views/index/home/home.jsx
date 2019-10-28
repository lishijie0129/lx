import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default class home extends Component {
  state={
    lists:[
      {
        txt:"主食类",
        img:"6.gif"
      },
      {
        txt:"肉食类",
        img:"6.gif"
      },
      {
        txt:"豆类",
        img:"6.gif"
      },
      {
        txt:"蔬菜类",
        img:"6.gif"
      },{
        txt:"水果类",
        img:"6.gif"
      },{
        txt:"奶类",
        img:"6.gif"
      },{
        txt:"油脂类",
        img:"6.gif"
      },{
        txt:"坚果类",
        img:"6.gif"
      },
      {
        txt:"调味类",
        img:"6.gif"
      }
    ]
  }
  componentDidMount(){
    new Swiper(".swiper-container",{
      loop:true,
      autoplay:{
        delay:1000
      }
    })
  }
  render() {
    let {lists}=this.state
    return <div className="home">
          <div className="swiper-container">
              <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      <img src={require('../../../img/1.jpg')} alt=""/>
                  </div>
                  <div className="swiper-slide">
                      <img src={require('../../../img/2.jpg')} alt=""/>
                  </div>
                  <div className="swiper-slide">
                      <img src={require('../../../img/3.jpg')} alt=""/>
                  </div>
                  <div className="swiper-slide">
                      <img src={require('../../../img/4.jpg')} alt=""/>
                  </div>
                  <div className="swiper-slide">
                      <img src={require('../../../img/5.jpg')} alt=""/>
                  </div>
              </div>
          </div>
          <div className="home-cons">
            {
              lists.map((ele,i)=><dl key={i}>
                <dt><img src={require('../../../img/'+ele.img)} alt=""/></dt>
                <dd>{ele.txt}</dd>
              </dl>)
            }
          </div>
      </div>
  }
}
