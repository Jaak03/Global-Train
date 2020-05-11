import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      component: () => import('./views/Base.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/settings',
      name: 'home',
      component: () => import('./views/Settings.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('./views/Stats.vue')
    },
    {
      path: '**',
      name: 'pageNotFound',
      component: () => import('./views/Base.vue')
    },
  ]
})