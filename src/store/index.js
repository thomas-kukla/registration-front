import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations:[],
    processes:[],
    filter:[],
  },
  mutations: {
    "SET_REGISTRATIONS_BY_FILTER"(state, filter){
      return state.filter = filter;
    },
    "SET_REGISTRATION_BY_ID"(state, registration) {
      return state.registrations = registration;
    },
    "SET_PROCESSES_BY_FILTER"(state, filter){
      return state.filter = filter;
    },
    "SET_PROCESS_BY_ID"(state, process){
      console.log("processe dans le store",process)
      return state.processes = process;
    },
  },
  actions: {
    getRegistrationsByFilter({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_REGISTRATIONS + "?" + filter.criteria + filter.search)
        .then((response) => {
          commit('SET_REGISTRATIONS_BY_FILTER', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getregistrationsBy", error);
        })
      })
    },
    getRegistrationById({commit}, registrationId){
      return new Promise ((resolve) => {
        axios
        .get(process.env.VUE_APP_API_REGISTRATIONS + registrationId)
        .then((response) => {
          commit('SET_REGISTRATION_BY_ID', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getregistrationByIderror", error);
        })
      })
    },
    getProcessesByFilter({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES + "?" + filter.criteria + filter.search)
        .then((response) => {
          commit("SET_PROCESSES_BY_FILTER", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("get all processes", error)
        })
      })
    },
    getProcessById({commit}, processId){
      console.log("processeId", processId)
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES + processId)
        .then((response) => {
          commit("SET_PROCESS_BY_ID", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("getProcessByIderror :", error);
        })
      })
    },
  },
  modules: {
  },
  getters: {
    getRegistrationsByFilter(state){
      return state.filter;
    },
    getRegistrationById(state) {
      return state.registrations;
    },
    getProcessesByFilter(state){
      return state.filter;
    },
    getProcessById(state){
      return state.processes;
    },
  }
})
