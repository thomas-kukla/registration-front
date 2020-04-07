import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    processes:[],
    filter:[],
  },
  mutations: {
    "SET_USERS_BY_FILTER"(state, filter){
      return state.filter = filter;
    },
    "SET_ONE_USER_BY_ID"(state, user) {
      return state.users = user;
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
    getUsersByMsisdn({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/users?subscriberMsisdn=' + filter)
        .then((response) => {
          commit('SET_USERS_BY_FILTER', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getUsersByMsisdnerror", error);
        })
      })
    },
    getUsersByFileId({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/users?fileId=' + filter)
        .then((response) => {
          commit('SET_USERS_BY_FILTER', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getUsersByMsisdnerror", error);
        })
      })
    },
    getUsersByCreatedDate({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/users?createdDate=' + filter)
        .then((response) => {
          commit('SET_USERS_BY_FILTER', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getUsersByMsisdnerror", error);
        })
      })
    },
    getUsersByState({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/users?state=' + filter)
        .then((response) => {
          commit('SET_USERS_BY_FILTER', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getUsersByMsisdnerror", error);
        })
      })
    },
    getUsersByOperationType({commit}, filter){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/users?operationType=' + filter)
        .then((response) => {
          commit('SET_USERS_BY_FILTER', response.data)
          resolve();
        })
        .catch((error) => {
          console.log("getUsersByMsisdnerror", error);
        })
      })
    },
    getAllProcesses({commit}){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/api/processes')
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
        .get('http://localhost:8000/api/processes/' + processId)
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
        .get('http://localhost:8000/api/processes?subscriberMsisdn=' + filter)
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
        .get('http://localhost:8000/api/processes?fileId=' + filter)
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
        .get('http://localhost:8000/api/processes?createdDate=' + filter)
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
        .get('http://localhost:8000/api/processes?lastModifiedDate=' + filter)
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
        .get('http://localhost:8000/api/processes?id=' + filter)
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
    getUser(state) {
      return state.users;
    },
    getUsersByFilter(state){
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
