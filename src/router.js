import Vue from 'vue';
import Router from 'vue-router';

// Page content
import Home from '@/components/page/Home';
import Login from '@/components/page/Login';
import Base from '@/components/page/Base';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Base
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: Login
    },
  ]
})