import Mock from 'mockjs'
import data from './data.json'
import data1 from './data1.json'
Mock.mock("/data/img",data)
Mock.mock("/data/list",data1)
Mock.mock("/data/logins",(obj)=>{
    
    let {body}=obj;
    let {names}=JSON.parse(body)
    if(names=="zs"){
        return {
            code:1
        }
    }else{
        return {
            code:0
        }
    }
})