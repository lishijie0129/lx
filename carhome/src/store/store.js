import {createStore} from 'redux'
function reducer(state,action){
    switch(action.type){
        case "add":
            state.count++;
            return {...state}
        case "del":state.count--;
        return {...state}
        default: return {...state}
    }
   
}
let initState={
    count:0
}
let store=createStore(reducer,initState);
window.store=store;
export default store