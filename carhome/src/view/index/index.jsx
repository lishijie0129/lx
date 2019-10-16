import React from 'react'
import Router from '../../router/router.view'
class Index extends React.Component{
    state={
        list:[
            {
                txt:"首页",
                url:"/index/home"
            },{
                txt:"找车",
                url:"/index/car"
              
            },{
                txt:"论坛"
            },{
                txt:"二手车"
            },{
                txt:"服务"
            }
        ],
        ind:0,
        flag:false,
        isclass:false
    }
    //跳路由
    clicks=(url,ind)=>{
        this.setState({ind})
        this.props.history.push(url&&url)
    }
    //点击箭头
    imgclick=(flag)=>{
        flag=!flag
        this.setState({flag})
    }
    //点击遮罩
    posclick=(flag)=>{
        flag=!flag
        this.setState({flag})
    }
    rouclick=(url)=>{
        this.props.history.push(url&&url)
    }
    componentDidMount(){
        //吸顶
        document.onscroll=()=>{
            if(document.documentElement.scrollTop>45){
                this.setState({isclass:true})
                this.refs.x.style.top=45+"px"
            }else{
                this.setState({isclass:false})
                this.refs.x.style.top=90+"px"
            } 
        }
    }
    render(){
        let {routers} =this.props;
        let {list,ind,flag,isclass}=this.state;
        return <div className="index">
            <div className="search">
                <li>汽车之家</li>
                <li onClick={()=>this.rouclick("/search")}><input type="text" placeholder="宝马" /></li>
                <li onClick={()=>this.rouclick("/my")}>{window.localStorage.user?window.localStorage.user:"我的"}</li>
            </div>
            <div className={`tab ${isclass?'posf':''}`}>
                {
                    list.map((item,i)=>{
                        return <li className={i===ind?"active":""} key={i} onClick={()=>this.clicks(item.url,i)}>{item.txt}</li>
                    })
                }
                <li><img src={require('@/img/ti.jpg')} className={flag?"imgActive":""} onClick={()=>this.imgclick(flag)} alt=""/></li>
                
            </div>
            <div className="content">
                    <Router routes={routers}></Router>
            </div>
                <div className={flag?"pos-box":""} onClick={()=>this.posclick(flag)} ref="x">

                </div>
        </div>
    }
}
export default Index 