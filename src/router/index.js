import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/registrations",
    name: "registrations",
    component: () =>
      import(
        /* webpackChunkName: "registrations" */ "@/views/Registrations.vue"
      ),
    beforeEnter: (to, from, next) => {
      let method = {
        criteria: "subscriberMsisdn",
        search: "",
      };
      store.dispatch("getRegistrationsByFilter", method).then();
      store.dispatch("getAllRegistrations").then();
      next();
    },
  },
  {
    path: "/processes",
    name: "processes",
    component: () =>
      import(/* webpackChunkName: "processes" */ "@/views/Processes.vue"),
    beforeEnter: (to, from, next) => {
      let method = {
        criteria: "subscriberMsisdn",
        search: "",
      };
      store.dispatch("getProcessesByFilter", method).then()
      store.dispatch("getAllProcesses").then();
      next();
    },
  },
  {
    path: "/registrations/:registrationId",
    name: "registration",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "registrationDetails" */ "@/views/Registration.vue"
      ),
  },
  {
    path: "/processes/:processId",
    name: "process",
    props: true,
    component: () =>
      import(/* webpackChunkName: "processDetails" */ "@/views/Process.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
