import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFab: false,
  },
  mutations: {
    changeMenuVisibility(state, payload) {
      state.showFab = payload.visibility;
    },
  }
});
