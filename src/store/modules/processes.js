import axios from "axios";
const logger = require('../../../winston.js');

export default {
  state: {
    processes: [],
    filter: [],
  },
  
  mutations: {
    SET_PROCESSES_BY_FILTER(state, filter) {
      logger.error({
        level:'error',
        message:'store.processes.mutations.set_by_filter', 
      })
      return (state.filter = filter);
    },
    SET_PROCESS_BY_ID(state, process) {
      return (state.processes = process);
    },
  },
  
  actions: {
    async getProcessesByFilter({ commit }, filter) {
      try {
        const response = await axios
        .get(`${process.env.VUE_APP_API_PROCESSES}?${filter.criteria}${filter.search}`);
        const processes = response.data;
        commit("SET_PROCESSES_BY_FILTER", processes);
      } catch(error){
        console.error('Il y a une erreur dans getProcessesByFilter', error);
      }
    },
    async getProcessById({ commit }, processId) {
      try {
        const response =  await axios.get(`${process.env.VUE_APP_API_PROCESSES}/${processId}`);
        const processById = response.data;
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
