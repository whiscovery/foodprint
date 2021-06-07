import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { baseurl } from '@/config/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: []
  },
  getters: {
  },
  mutations: {
    FETCH_FOODS (state, payload) {
      state.foods = payload
    },
  },
  actions: {
    fetchFoods ({ commit }) {
      axios.get(baseurl + '/foods')
      .then((res) => {
        commit('FETCH_FOODS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
  }
})
