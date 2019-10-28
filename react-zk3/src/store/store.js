import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

function reducer(state,action){
    if(action.type==="getda"){
        state.newData=action.data
    }
    if(action.type==="xgnum"){
        let count=state.newData[action.i].children[action.j];
            
        let flag=state.carData.some((ele)=>ele.id===count.id)
        if(!flag){
            state.carData.push(count);
        }
        
            
       
        count.num++;
    }
    // console.log(state);
    
    return {...state}
}
let initSate={
    newData:[],
    carData:[]
}
let store=createStore(reducer,initSate,applyMiddleware(thunk))
export default store