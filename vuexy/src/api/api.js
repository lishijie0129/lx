// import axios from 'axios'
import newAxios from '@/until/http.js'
//登录
export const login=(params)=>newAxios.post("/api/user/login",params)
//注册
export const register=(params)=>newAxios.post("/api/user/registry",params)
//用户信息
export const getUserInfo=()=>newAxios.get("/api/user/getUserInfo")


//轮播图
export const banner=()=>newAxios.get("/api/home/banner")
//首页
export const homeData=(params)=>newAxios.get("/api/home/shop",{params})
//左边列表
export const leftList=()=>newAxios.get("/api/shop/shopType")
//一级的数据
export const selectType=(params)=>newAxios.get("/api/shop/selectType",{params})

//添加购物车
export const addCar=(params)=>newAxios.post("/api/car/addCar",params)
//获取购物车商品
export const getCarList=(params)=>newAxios.get("/api/car/getCar",{params})