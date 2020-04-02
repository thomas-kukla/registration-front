import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    processes:[],
    msisdn:[]
  },
  mutations: {
    // "SET_USERS"(state, users) {
    //   state.users = JSON.parse(users)._embedded.registrationfile
    // },
    "SET_USERS_MSISDN"(state, msisdnId){
      return state.msisdn = msisdnId;
    },
    "SET_ONE_USER"(state, user) {
      return state.users = user;
    },
    // "SET_PROCESSES"(state, processes){
    //   state.processes = JSON.parse(processes)._embedded.process
    // },
    "SET_USER_BY_ID"(state, process){
      return state.processes = process;
    },
    "SET_MSISDN"(state, msisdnId){
      return state.msisdn = msisdnId;
    }
  },
  actions: {
    // getUsers({commit}){
    //   return new Promise((resolve) => {
    //     axios
    //     .get('http://127.0.0.1:8000/registration')
    //     .then(function (response) {
    //       commit('SET_USERS', response.data)
    //       resolve();
    //     })
    //   })
    // },
    getUsersByMsisdn({commit}, msisdnId){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/users?subscriberMsisdn=' + msisdnId)
        .then(function(response){
          commit('SET_USERS_MSISDN', response.data)
          resolve();
        })
      })
    },
    getUserById({commit}, userId){
      return new Promise ((resolve) => {
        axios
        .get('http://127.0.0.1:8000/api/users/' + userId)
        .then(function(response) {
          commit('SET_ONE_USER', response.data)
          resolve();
        })
      })
    },
    // getProcesses({commit}) {
    //   return new Promise((resolve) => {
    //     axios
    //     .get('http://127.0.0.1:8000/process')
    //     .then(function(response) {
    //       commit('SET_PROCESSES', response.data)
    //       resolve()
    //     })
    //   }
    //   )},
      getProcessById({commit}, processId){
        return new Promise((resolve) => {
          axios
          .get('http://localhost:8000/api/processes/' + processId)
          .then(function(response){
            commit("SET_USER_BY_ID", response.data)
            resolve()
          }) 
        })
      },
      getProcessesByMsisdn({commit}, msisdnId){
        return new Promise((resolve) => {
          axios
          .get('http://localhost:8000/api/processes?subscriberMsisdn=' + msisdnId)
          .then((response) => {
            commit("SET_MSISDN", response.data)
            resolve()
          })
        })
      }
    },
  modules: {
  },
  getters: {
    // getUsers(state) {
    //   return state.users
    // },
    getUser(state) {
      return state.users
    },
    // getProcesses(state){
    //   return state.processes
    // },
    getProcessById(state){
      return state.processes
    },
    getProcessesByMsisdn(state){
      return state.msisdn
    },
    getUsersByMsisdn(state){
      return state.msisdn
    }
  }
})
