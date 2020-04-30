<template>
  <div class="registration">
    <div>
      <dispatch @methods="updateMethod" :registrations="totalRegistrations" />
      <input
        @keydown="search()"
        v-model="searching"
        placeholder="Filter"
        class="mt-2 ml-2 w-25 form-control"
      />
    </div>
    <results @resultsToDisplay="updateNumberOfResults" :numberOfResults.sync="numberOfResults" />
    <pagination
      v-if="totalRegistrations.length > 0"
      :pagesToDisplay="totalRegistrations"
      :currentPage="currentPage"
      :numberOfResults="numberOfResults"
      @update="updatePage"
    />
    <registrations-list :registrations="registrationsFilter" />
    <pagination
      v-if="totalRegistrations.length > 0"
      :pagesToDisplay="totalRegistrations"
      :registrations="registrationsFilter"
      :currentPage="currentPage"
      :numberOfResults="numberOfResults"
      @update="updatePage"
    />
  </div>
</template>

<script>
import Dispatch from "@/components/Dispatch.vue";
import RegistrationsList from "@/components/RegistrationsList";
import Pagination from "@/components/Pagination.vue";
import Results from "@/components/Results.vue";
import store from "@/store/index.js";

export default {
  components: {
    Dispatch,
    RegistrationsList,
    Pagination,
    Results,
  },
  data() {
    return {
      errorMessage: "",
      currentPage: 0,
      numberOfResults: 10,
      searching: "",
      method: {
        criteria: "",
        search: "",
      },
      keyPress: false,
    };
  },
  // enable to fetch processes in live with the input
  updated() {
    if (this.keyPress) {
      this.method.search = this.searching;
      store.dispatch("getRegistrationsByFilter", this.method).then();
      this.keyPress = false;
    }
  },
  methods: {
    // catch the event emit by the click on the navigation's arrows and change currentPage
    // in computed, it enables to display the next processes
    updatePage(pageNumber) {
      return (this.currentPage = pageNumber);
    },
    updateNumberOfResults(newNumberOfResults) {
      this.currentPage = 0;
      this.numberOfResults = newNumberOfResults;
      this.searching = "";
      this.registrationsFilter;
    },
    updateMethod(newMethod) {
      this.method.criteria = newMethod + "=";
      this.searching = "";
      this.registrationsFilter;
    },
    search() {
      this.keyPress = true;
    },
  },
  computed: {
    firstResult(){
      return this.currentPage * this.numberOfResults;
    },
    lastResult(){
      return this.firstResult + parseInt(this.numberOfResults);
    },
    registrationsFilter() {
      //fetch all Registrations
      let msisdnToDisplay = store.getters.getRegistrationsByFilter;
    
      return msisdnToDisplay.slice(this.firstResult, this.lastResult);
    },
    totalRegistrations() {
      return store.getters.getRegistrationsByFilter;
    },
  },
};
</script>
