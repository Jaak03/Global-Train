import Vue from 'vue';
import Vuex from 'vuex';

import { API_KEY, API_URL } from '../.env/dev';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFab: false,
    menuButtons: [
      {
        label: '/home',
        icon: 'mdi-home',
        show: true,
      },
      {
        label: '/statistics',
        icon: 'mdi-account',
        show: true,
      },
      {
        label: '/settings',
        icon: 'mdi-cog',
        show: true,
      },
      {
        label: '/logout',
        icon: 'mdi-logout',
        show: true,
      }
    ],
    api: {
      API_URL,
      API_KEY
    }
  },
  mutations: {
    changeMenuVisibility(state, payload) {
      state.showFab = payload.visibility;
    },
    customizePageMenu(state, payload) {
      console.log(payload.page);
      this.state.menuButtons.forEach((button, i) => {
        console.log(payload.page === button.label);
        if(payload.page === button.label) {
          state.menuButtons[i].show = false;
        } else {
          state.menuButtons[i].show = true;
        }
      });
    }
  }
});
