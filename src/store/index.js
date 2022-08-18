import { createStore } from 'vuex'

export default createStore({
  state: {
    number:0,
    name:"Escribe algo"
  },
  getters: {
  },
  mutations: {
    increment(state){
      state.number++
    },
    decrement(state){
      state.number--
    },
    text(state){
      state.name 
    }
  },
  actions: {
  },
  modules: {
  }
})
