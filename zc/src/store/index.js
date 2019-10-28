import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData:[],
    sum:0
  },
  mutations: {
    getData(state,item){
      state.listData=[...item]
    },
    sumData(state,item){
      let {i,j,k}=item;
      state.listData[j].children[k].child[i].num=1;
    },
    addData(state,item){
      let {i,j,k}=item;
      state.listData[j].children[k].child[i].num++;
    },
    reData(state,item){
      let {i,j,k}=item;
      state.listData[j].children[k].child[i].num>=1?state.listData[j].children[k].child[i].num--:
      state.listData[j].children[k].child[i].num
    }
  },
  actions: {
  },
  modules: {
  }
})
