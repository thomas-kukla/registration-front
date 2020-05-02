import axios from "axios";

export default {
  state: {
    registrations: [],
    filter: [],
  },
  
  mutations: {
    SET_REGISTRATIONS_BY_FILTER(state, filter) {
      return (state.filter = filter);
    },
    SET_REGISTRATION_BY_ID(state, registration) {
      return (state.registrations = registration);
    },
  },
  
  actions: {
    async getRegistrationsByFilter({ commit }, filter) {
      try {
        let response = await axios
        .get(`${process.env.VUE_APP_API_REGISTRATIONS}?${filter.criteria}${filter.search}`);
        let registrations =  response.data;
        commit("SET_REGISTRATIONS_BY_FILTER", registrations);
      } catch(error){
        console.error('Erreur dans getRegistrationsByFilter', error);
      }
    },
    async getRegistrationById({ commit }, registrationId) {
      try {
        let response = await axios.get(`${process.env.VUE_APP_API_REGISTRATIONS}/${registrationId}`);
        console.log(response);
        let registrationById = response.data;
        commit("SET_REGISTRATION_BY_ID", registrationById);
      } catch (error) {
        console.error('Erreur dans getRegistrationsById', error);
      }
    }
  },
  
  getters: {
    getRegistrationsByFilter(state) {
      return state.filter;
    },
    getRegistrationById(state) {
      return state.registrations;
    },
  },
};
