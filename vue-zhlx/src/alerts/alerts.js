import Alerts from './alerts.vue'
const aAletrs={
    install(Vue){
        console.log(Vue);
        
        let ToAlets=Vue.extend(Alerts)
        let inToAlets= new ToAlets()
        inToAlets.$mount(document.createElement("div"))
        console.log(inToAlets.$el);
        
        document.body.appendChild(inToAlets.$el)
        Vue.prototype.$alerts=(msg,dur=1500)=>{
            inToAlets.msg=msg
            inToAlets.show=true
            setTimeout(()=>{
                inToAlets.show=false
            },dur)
        }
    }
}
export default aAletrs