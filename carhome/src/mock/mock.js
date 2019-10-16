import Mock from 'mockjs'
import city from './city.json'

let newCity=[...new Set(city.data.map((ele,i)=>{
    return ele.Spelling.substr(0,1)
}))]
let data={}
    newCity.forEach((item,i)=>{
        data[item]=city.data.filter((ele)=>{
            return item===ele.Spelling.substr(0,1)
        })
    })
// console.log(data);
Mock.mock("api/carData",data)
Mock.mock("api/homeData",{
    "list|10":[
        {
            'id|+1':1,
            'title':'@ctitle',
            'pic':'@image(80x80)'
        }
    ]
})
Mock.mock("/api/textpwd",(data)=>{
    let datas=JSON.parse(data.body)
    if(datas.text==='1'&&datas.pwd==="1"){
        return {
            code:1,
            msg:"成功"
        }
    }else{
        return {
            code:0,
            msg:"失败"
        }
    }
})