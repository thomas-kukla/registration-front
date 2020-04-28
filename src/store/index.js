import Vue from "vue";
import Vuex from "vuex";
import processes from "@/store/modules/processes.js";
import registrations from "@/store/modules/registrations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    processes,
    registrations,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
