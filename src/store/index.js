import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    processes:[],
    msisdn:[],
  },
  mutations: {
    "SET_USERS_BY_MSISDN"(state, msisdnId){
      return state.msisdn = msisdnId;
    },
    "SET_ONE_USER_BY_ID"(state, user) {
      return state.users = user;
    },
    "SET_PROCESS_BY_ID"(state, process){
      return state.processes = process;
    },
    "SET_PROCESSES_BY_MSISDN"(state, msisdnId){
      return state.msisdn = msisdnId;
    }
  },
  actions: {
    getUsersByMsisdn({commit}, msisdnId){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/users?subscriberMsisdn=' + msisdnId)
        .then(function(response){
          commit('SET_USERS_BY_MSISDN', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getUsersByMsisdnerror", error);
        })
      })
    },
    getUserById({commit}, userId){
      return new Promise ((resolve) => {
        axios
        .get('http://127.0.0.1:8000/api/users/' + userId)
        .then((response) => {
          commit('SET_ONE_USER_BY_ID', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getUserByIderror", error);
        })
      })
    },
      getProcessById({commit}, processId){
        return new Promise((resolve) => {
          axios
          .get('http://localhost:8000/api/processes/' + processId)
          .then(function(response){
            commit("SET_PROCESS_BY_ID", response.data)
            resolve()
          })
          .catch((error) => {
            console.log("getProcessByIderror :", error);
          })
        })
      },
      getProcessesByMsisdn({commit}, msisdnId){
        return new Promise((resolve) => {
          axios
          .get('http://localhost:8000/api/processes?subscriberMsisdn=' + msisdnId)
          .then((response) => {
            commit("SET_PROCESSES_BY_MSISDN", response.data)
            resolve()
          })
          .catch((error) => {
            console.log("getProcessesByMsisdn :",error);
          })
        })
      }
    },
  modules: {
  },
  getters: {
    getUser(state) {
      return state.users;
    },
    getProcessById(state){
      return state.processes;
    },
    getProcessesByMsisdn(state){
      return state.msisdn;
    },
    getUsersByMsisdn(state){
      return state.msisdn;
    }
  }
})
