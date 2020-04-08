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
    "SET_PROCESSES"(state, processes){
      return state.processes = processes;
    },
    "SET_PROCESS_BY_ID"(state, process){
      return state.processes = process;
    },
    "SET_PROCESSES_BY_FILTER"(state, filter){
      return state.filter = filter;
    }
  },
  actions: {
    getRegistrationsBy({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_REGISTRATIONS + filter.criteria + filter.search)
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
    getProcesses({commit}){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES)
        .then((response) => {
          commit("SET_PROCESSES", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("get all processes", error)
        })
      })
    },
    getProcessById({commit}, processId){
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
    getProcessesByMsisdn({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES + 'subscriberMsisdn=' + filter)
        .then((response) => {
          commit("SET_PROCESSES_BY_FILTER", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("getProcessesByMsisdn :",error);
        })
      })
    },
    getProcessesByFileId({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES + 'fileId=' + filter)
        .then((response) => {
          commit("SET_PROCESSES_BY_FILTER", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("getProcessesByMsisdn :",error);
        })
      })
    },
    getProcessesByCreatedDate({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES + 'createdDate=' + filter)
        .then((response) => {
          commit("SET_PROCESSES_BY_FILTER", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("getProcessesByMsisdn :",error);
        })
      })
    },
    getProcessesByLastModifieDate({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES + 'lastModifiedDate=' + filter)
        .then((response) => {
          commit("SET_PROCESSES_BY_FILTER", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("getProcessesByMsisdn :",error);
        })
      })
    },
    getProcessesById({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get(process.env.VUE_APP_API_PROCESSES + 'id=' + filter)
        .then((response) => {
          commit("SET_PROCESSES_BY_FILTER", response.data)
          resolve()
        })
        .catch((error) => {
          console.log("getProcessesByMsisdn :",error);
        })
      })
    },
  },
  modules: {
  },
  getters: {
    getRegistrations(state) {
      return state.registrations;
    },
    getRegistrationById(state) {
      return state.registrations;
    },
    getRegistrationsBy(state){
      return state.filter;
    },
    getProcesses(state){
      return state.processes;
    },
    getProcessById(state){
      return state.processes;
    },
    getProcessesByFilter(state){
      return state.filter;
    }
  }
})
