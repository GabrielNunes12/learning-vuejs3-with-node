import { createStore } from 'vuex';

const state = {
  count: 0
}
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    if(state.count <= 0) return;
    state.count--;
  }
}
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
}
const getters = {
  counter: state => state.count,
}

export default createStore({
  state,
  mutations,
  getters,
  actions
})