import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Locator from '../views/Locator.vue'
import Checklist from '../views/Checklist.vue'
import Datepicker from '../views/Datepicker.vue'
import Visit from '../views/Visit.vue'
import Show from '../views/Show.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/directions',
    name: 'Locator',
    component: Locator
  },
  {
    path: '/checklist',
    name: 'Checklist',
    component: Checklist
  },
  {
    path: '/pick-dates-calendar',
    name: 'Datepicker',
    component: Datepicker
  },
  {
    path: '/where-to-visit',
    name: 'Visit',
    component: Visit
  },
  {
    path: '/trip',
    name: 'Show',
    component: Show
  },
  {
    path: '/register',
    name: 'Signup',
    component: Signup
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
