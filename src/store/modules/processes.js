import axios from 'axios'

export default {
    state: {
        processes:[],
        filter:[],
    },

    mutations:{
        "SET_PROCESSES_BY_FILTER"(state, filter){
            return state.filter = filter;
          },
        "SET_PROCESS_BY_ID"(state, process){
        return state.processes = process;
        },
    },

    actions:{
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

    getters:{
        getProcessesByFilter(state){
            return state.filter;
          },
          getProcessById(state){
            return state.processes;
          },
    }
}