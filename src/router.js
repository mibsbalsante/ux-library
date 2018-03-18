import Vue from 'vue'
import Router from 'vue-router'
import Results from './views/Results.vue'

Vue.use(Router)

const results = {
  component: Results,
  props: true
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Results
    },
    {
      path: '/results/:search',
      ...results
    },
    {
      path: '/popularity/:upvotes',
      ...results
    },
    {
      path: '/date/:created_at',
      ...results
    },
    {
      path: '/comments/:comments',
      ...results
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
