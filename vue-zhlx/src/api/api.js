import axios from 'axios'
import '@/mock/mock'
export const imgData=()=>axios.get("/img/data");
export const listData=(params)=>axios.post("/list/data",params)