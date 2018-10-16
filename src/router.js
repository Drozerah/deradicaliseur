import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Histoire from './components/Histoire.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/histoire',
        name: 'histoire',
        component: Histoire
    }
  ]
})