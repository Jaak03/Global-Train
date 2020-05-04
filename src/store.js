import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFab: false,
  },
  mutations: {
    toggleMenuShow(state) {
      state.showFab = !state.showFab;
    }
  }
});
