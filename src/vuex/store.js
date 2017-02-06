import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count : 0
}

const mutations = {
	increment(state){
		state.count++;
	},
	decrement(state){
		state.count--;
	}
}

//action 绑定到view中的method
const actions = {
	increment:({commit}) => commit('increment'),
	decrement:({commit}) => commit('decrement'),
	incrementIfOdd({commit,state}){
		if ((state.count+1)%2 == 0) {
			commit('increment');
		}
	}
}

//getters 绑定到view中的computed中
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})