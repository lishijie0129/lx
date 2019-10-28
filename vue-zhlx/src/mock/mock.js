import Mock from 'mockjs'
import img from './img.json'
Mock.mock("/img/data",img)
Mock.mock("/list/data",({body})=>{
    let {page,limit}=JSON.parse(body)
    //0-9 10-19  
    let pages=(page-1)*limit
    if(page<=5){
        return Mock.mock({
            [`list|${limit}`]:[{
                "id|+1":pages,
                "title":"@ctitle",
                "img":'@image(100X100)',
                "price|10-100":10,
                "num":0,
                "isflag":false
            }]
        })
    }else{
        return {
            list:[]
        }
    }
    
})