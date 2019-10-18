import React from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
//轮播图
export default class swipers extends React.Component {
    componentDidMount(){
        new Swiper(".swiper-container",{
          loop:true,
          autoplay:{
            delay:1000
          }
        })
      }
  render(){
      return  <div className="swiper-container">
      <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={require('../img/1.jpg')} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={require('../img/2.jpg')} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={require('../img/3.jpg')} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={require('../img/4.jpg')} alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={require('../img/5.jpg')} alt=""/>
          </div>
      </div>
    </div>
  }
}
