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
    path: '/processes',
    name: 'processes',
    component: () => import(/* webpackChunkName: "process" */ '../views/Processes.vue'),
  },
  {
    path: '/user/:userId',
    name: 'user',
    props: true,
    component: () => import(/* webpackChunkName: "details" */ '../views/User.vue')
  },
  {
    path: '/process/:processId',
    name: 'process',
    props: true,
    component: () => import(/* webpackChunkName: "processDetails" */ '../views/Process.vue')
  },
]

const router = new VueRouter({
  mode:"history",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
})

export default router;
