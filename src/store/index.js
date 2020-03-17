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
    "SET_USERS"(state, users) {
      state.users = users
    },
    "SET_ONE_USER"(state, user) {
      console.log("state", state, "user", user)
      return state.users = user;
    },
    "SET_PROCESSES"(state, processes){
      state.processes = processes
      console.log("processes", processes)
    },
    "SET_USER_BY_ID"(state, process){
      return state.processes = process

    },
  },
  actions: {
    getUsersFromBack({commit}){
      return new Promise((resolve) => {
        axios
        .get('http://localhost:8000/users')
        .then(function (response) {
          commit('SET_USERS', response.data)
          resolve();
        })
      })
    },
    getUserById({commit, state}, userId){
      console.log("getuserbyid","state", state) 
      return new Promise ((resolve, reject) => {
        console.log("getuserbyid",'resolve', resolve, 'reject', reject, 'userId', userId)
        axios
        .get('http://127.0.0.1:8000/api/users/' + userId)
        .then(function(response) {
          commit('SET_ONE_USER', response.data)
          resolve();
        })
      })
    },
    getProcessesFromBack({commit, resolve}, query) {
      console.log("getProcessesFromBackend","resolve", resolve, "commit", commit, "query", query)
      return new Promise((resolve, reject) => {
        console.log("getProcessesFromBackend","resolve", resolve, "reject", reject)
        axios
        .get('http://127.0.0.1:8000/api/processes')
        .then(function(response) {
          commit('SET_PROCESSES', response.data)
          resolve()
        })
      }

      )},
      getProcessById({commit, resolve}, processId){
        console.log("getProcessById","commit", commit, "resolve", resolve, "processid", processId)
        new Promise((resolve, reject) => {
          console.log("resolve", resolve, "reject", reject)
          axios
          .get('http://127.0.0.1:8000/api/processes/' + processId)
          .then(function(response){
            commit("SET_USER_BY_ID", response.data)
            resolve()
          }) 

        })
      },
  },
  modules: {
  },
  getters: {
    getUsers(state) {
      return state.users
    },
    getUser(state) {
      return state.users
    },
    getProcesses(state){
      return state.processes
    },
    getProcessById(state){
      return state.processes
    },
  }
})
