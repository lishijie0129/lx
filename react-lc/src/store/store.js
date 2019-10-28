import {createStore} from 'redux'
function reducer(state,actions){
    if(actions.type==="add"){
        let isS=state.carData.findIndex(ele=>ele.name===actions.item.name)
            if(isS===-1){
                state.carData.push(actions.item)
            }
    }
    // console.log(state.carData);
    
    return {...state}    
}
let initState={
    carData:[]
}
let store=createStore(reducer,initState)
export default store