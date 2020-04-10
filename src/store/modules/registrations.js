import axios from 'axios'

export default {
    state: {
        registrations:[],
        filter:[]
    },

    mutations:{
        "SET_REGISTRATIONS_BY_FILTER"(state, filter){
            return state.filter = filter;
          },
        "SET_REGISTRATION_BY_ID"(state, registration) {
        return state.registrations = registration;
          },
    },

    actions:{
        getRegistrationsByFilter({commit}, filter){
            return new Promise((resolve) => {
              axios
              .get(process.env.VUE_APP_API_REGISTRATIONS + "?" + filter.criteria + filter.search)
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
    },

    getters:{
        getRegistrationsByFilter(state){
            return state.filter;
          },
          getRegistrationById(state) {
            return state.registrations;
          },
    }
}