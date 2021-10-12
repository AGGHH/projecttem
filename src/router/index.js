import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/wisdompass',
        name: 'Wisdompass',
        // route level code-splitting
        // this generates a separate chunk (wisdompass.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "wisdompass" */ '../views/wisdompass.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router