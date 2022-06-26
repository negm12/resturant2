import { createStore } from 'vuex'

export default createStore({
  state: {
    loves : [],
    car :[],
    total_price:0
  },
  getters: {
  },
  mutations: {
    updateloves(state , love){
      if(!state.loves.includes(love)){
        state.loves.push(love)
      }
    },
    updatecar(state , car){
      if(!state.car.includes(car)){
        state.car.push(car)
      }
    },
    updatetotal(state){
      state.total_price += state.car.price*state.car.amount
    }
  },
  actions: {
  },
  modules: {
  }
})
