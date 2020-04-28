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
    <registration-list :registrations="registrationsFilter" />
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
import RegistrationList from "@/components/RegistrationList";
import Pagination from "@/components/Pagination.vue";
import Results from "@/components/Results.vue";
import store from "@/store/index.js";

export default {
  components: {
    Dispatch,
    RegistrationList,
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
    updateNumberOfResults(newnumberOfResults) {
      this.currentPage = 0;
      this.numberOfResults = newnumberOfResults;
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
    registrationsFilter() {
      //fetch all Registrations
      let msisdnToDisplay = store.getters.getRegistrationsByFilter;

      // Define two variables to slice processes
      // with the updatePage's method, it enables to display each slice by changing the currentPage
      let a = this.currentPage * this.numberOfResults;

      //using parseInt to avoid concatenation instead of addition
      let b = a + parseInt(this.numberOfResults);
      return msisdnToDisplay.slice(a, b);
    },
    totalRegistrations() {
      return store.getters.getRegistrationsByFilter;
    },
  },
};
</script>
