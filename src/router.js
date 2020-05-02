
import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Home from '@/components/HelloWorld'

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})