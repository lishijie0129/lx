import newAxios from '../components/http'

//登录
export const logins=(params)=>newAxios.post("/login",params)
//注册
export const registers=(params)=>newAxios.post("/register",params)
//获取投票
export const voteAxios=()=>newAxios.get("/vote/allVote")
//添加投票

export const voteNewvote=(params)=>newAxios.post("/vote/newvote",params)