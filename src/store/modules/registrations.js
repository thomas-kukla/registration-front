import axios from "axios";

export default {
  state: {
    registrations: [],
    filter: [],
  },
  
  mutations: {
    SET_REGISTRATIONS_BY_FILTER(state, filter) {
      return state.filter = filter;
    },
    SET_ALL_REGISTRATIONS(state, registrations){
      return state.registrations = registrations;
    },
    SET_REGISTRATION_BY_ID(state, registration) {
      return state.registrations = registration;
    },
  },
  
  actions: {
    async getAllRegistrations({ commit }) {
      try {
        const response = await axios
        .get(`${process.env.VUE_APP_API_REGISTRATIONS}`);
        const registrations = response.data;
        commit("SET_ALL_REGISTRATIONS", registrations);
      } catch(error){
        console.error('Il y a une erreur dans getAllRegistrations', error);
      }
    },
    async getRegistrationsByFilter({ commit }, filter) {
      try {
        const response = await axios
        .get(`${process.env.VUE_APP_API_REGISTRATIONS}?${filter.criteria}${filter.search}`);
        const registrations =  response.data;
        commit("SET_REGISTRATIONS_BY_FILTER", registrations);
      } catch(error){
        console.error('Erreur dans getRegistrationsByFilter', error);
      }
    },
    async getRegistrationById({ commit }, registrationId) {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_REGISTRATIONS}/${registrationId}`);
        const registrationById = response.data;
        commit("SET_REGISTRATION_BY_ID", registrationById);
      } catch (error) {
        console.error('Erreur dans getRegistrationsById', error);
      }
    }
  },
  
  getters: {
    getAllRegistrations(state){
      return state.registrations
    }, 
    getRegistrationsByFilter: (state) => (slicer) => {
      let registrations =  state.filter;
      return registrations.slice(slicer.firstIndex, slicer.lastIndex)
    },
    getRegistrationById(state) {
      return state.registrations;
    },
  },
};
