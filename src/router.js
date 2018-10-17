import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Histoire from './components/Histoire.vue'
import Dispo from './components/Dispo.vue'
import Couverture from './components/Couverture.vue'
import Extraits from './components/Extraits.vue'

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
            path: '/histoire',
            name: 'histoire',
            component: Histoire
        },
        {
            path: '/couverture',
            name: 'couverture',
            component: Couverture
        },
        {
            path: '/extraits',
            name: 'extraits',
            component: Extraits
        },
        {
            path: '/disponibilites',
            name: 'disponibilites',
            component: Dispo
        }
    ]
})