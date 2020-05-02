import axios from "axios";

export default {
  state: {
    processes: [],
    filter: [],
  },
  
  mutations: {
    SET_PROCESSES_BY_FILTER(state, filter) {
      return (state.filter = filter);
    },
    SET_PROCESS_BY_ID(state, process) {
      return (state.processes = process);
    },
  },
  
  actions: {
    async getProcessesByFilter({ commit }, filter) {
      try {
        let response = await axios
        .get(`${process.env.VUE_APP_API_PROCESSES}?${filter.criteria}${filter.search}`);
        let processes = response.data;
        commit("SET_PROCESSES_BY_FILTER", processes);
      } catch(error){
        console.error('Il y a une erreur dans getProcessesByFilter', error);
      }
    },
    async getProcessById({ commit }, processId) {
      try {
        let response =  await axios.get(`${process.env.VUE_APP_API_PROCESSES}/${processId}`);
        let processById = response.data;
        commit("SET_PROCESS_BY_ID", processById);
      } catch(error) {
        console.error("Il y a une erreur dans getProcessById", error);
        
      }
    },
  },
  getters: {
    getProcessesByFilter(state) {
      return state.filter;
    },
    getProcessById(state) {
      return state.processes;
    },
  },
};
