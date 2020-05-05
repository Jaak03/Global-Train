import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFab: false,
    menuButtons: [
      {
        label: 'home',
        icon: 'mdi-home',
        show: true,
      },
      {
        label: 'stats',
        icon: 'mdi-weight-lifter',
        show: true,
      },
      {
        label: 'settings',
        icon: 'mdi-cog',
        show: true,
      },
      {
        label: 'logout',
        icon: 'mdi-logout',
        show: true,
      }
    ]
  },
  mutations: {
    changeMenuVisibility(state, payload) {
      state.showFab = payload.visibility;
    },
  }
});
