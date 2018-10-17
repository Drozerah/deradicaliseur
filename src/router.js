import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Histoire from './components/Histoire.vue'
import Couverture from './components/Couverture.vue'
import Plat_verso from './components/Plat_verso.vue'
import Extraits from './components/Extraits.vue'
import Actualites from './components/Actualites.vue'
import Auteurs from './components/Auteurs.vue'
import Bonus from './components/Bonus.vue'
import Dispo from './components/Dispo.vue'

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
            path: '/plat_verso',
            name: 'plat_verso',
            component: Plat_verso
        },
        {
            path: '/extraits',
            name: 'extraits',
            component: Extraits
        },
        {
            path: '/actualites',
            name: 'actualites',
            component: Actualites
        },
        {
            path: '/auteurs',
            name: 'auteurs',
            component: Auteurs
        },
        {
            path: '/bonus',
            name: 'bonus',
            component: Bonus
        },
        {
            path: '/disponibilites',
            name: 'disponibilites',
            component: Dispo
        }
    ]
})