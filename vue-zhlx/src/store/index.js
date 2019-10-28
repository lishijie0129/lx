import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    carData:[],
    isN:false,
    addRessData:[]
  },
  getters: {
    sumData(state){
     return state.carData.reduce((pre,ele)=>pre+(ele.num*ele.price),0) 
    },
    sum(state){
      return state.carData.reduce((pre,ele)=>pre+ele.num,0) 
     }
  },
  mutations: {
    getData(state,item){
      let isS=state.carData.some((ele)=>ele.id===item.id);
      if(!isS){
        item.num++;
        item.isflag=true;
        state.carData.push(item);
        let flag=state.carData.every((ele)=>ele.isflag===true)
        flag?state.isN=true:state.isN=false;
      }else{
        item.num++;
      }
    },
    clicks(state,item){
      state.carData[item].num===0?state.carData[item].num=1:state.carData[item].num;
      state.carData[item].isflag=!state.carData[item].isflag
      let flag=state.carData.every((ele)=>ele.isflag===true)
      flag?state.isN=true:state.isN=false;
      
    },
    addFn(state,item){
      state.carData[item].num++;
      state.carData[item].num>0?state.carData[item].isflag=true:state.carData[item].isflag=false
      let flag=state.carData.every((ele)=>ele.isflag===true)
      flag?state.isN=true:state.isN=false;
       
    },
    reFn(state,item){
      state.carData[item].num--;
      if(state.carData[item].num<1){
        state.carData.splice(item,1)
        state.isN=false
      }
    },
    getAdd(state,item){
      state.addRessData.push(item)
    },
    xgAdd(state,item){
      let index=state.addRessData.findIndex(ele=>ele.id==item.id)
      state.addRessData[index]=item
      console.log(state.addRessData);
      
    }
  },
  actions: {
  },
  modules: {
  }
})
