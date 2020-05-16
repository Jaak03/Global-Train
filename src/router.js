import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
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
});

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

router.beforeEach((to, from, next) => {
  // if (authRequired && !loggedIn) {
  //   return next('/login');
  // }
  try {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(parseJwt(token));
    }
  } catch (error) {
    console.log(error.stack);
    return {};
  }

  next();
});
