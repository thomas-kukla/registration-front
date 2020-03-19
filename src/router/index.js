import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
  },
  {
    path: '/process',
    name: 'process',
    component: () => import(/* webpackChunkName: "process" */ '../views/Process.vue'),
  },
  {
    path: '/userDetails/:userId',
    name: 'userDetails',
    props: true,
    component: () => import(/* webpackChunkName: "details" */ '../views/UserDetails.vue')
  },
  {
    path: '/processDetails/:processId',
    name: 'processDetails',
    props: true,
    component: () => import(/* webpackChunkName: "processDetails" */ '../views/ProcessDetails.vue')
  },
]

const router = new VueRouter({
  mode:"history",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router;
