import Vue from 'vue';
import Router from 'vue-router';

// Page content
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Base from './views/Base.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      component: Base
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '**',
      name: 'pageNotFound',
      component: Base
    },
  ]
})