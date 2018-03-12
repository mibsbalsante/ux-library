import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Results from './views/Results.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/results/:search',
      name: 'results',
      component: Results,
      props: true
    },
    {
      path: '*',
      component: Home
    }
  ]
})
