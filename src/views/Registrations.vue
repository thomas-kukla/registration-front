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
     <input
     v-model="results"
     @keypress.enter="updateResultsPerPage()"
      class="form-control mt-1 ml-2 w-25"
      />
      <div>
        <nav aria-label="Page navigation example d-flex flex-row">
          <ul class="pagination justify-content-center d-flex flex-row">
            <li 
            @click="goToFirstPage()" 
            :class="{disabled:firstIsDisabled}" 
            class="page-item"
            ><a class="page-link has-label">First</a>
            </li>
            <li 
            v-for="(page, index) in totalPagesResults" :key="index" 
            @click="resultsToDisplay(index)" 
            class="page-item">
            <a class="page-link" href="#">{{ index + 1 }}</a>
            </li>
            <li 
            @click="goToLastPage()" 
            :class="{disabled:lastIsDisabled}" 
            class="page-item">
            <a class="page-link has-label">Last</a>
            </li>
          </ul>
        </nav> 
      </div>
    <registrations-list :registrations="registrationsFiltered" />
  </div>
</template>

<script>
import Dispatch from "@/components/Dispatch.vue";
import RegistrationsList from "@/components/RegistrationsList";
import store from "@/store/index.js";

export default {
  components: {
    Dispatch,
    RegistrationsList,
  },
  data() {
    return {
      errorMessage: null,
      searching: "",
      method: {
        criteria: "",
        search: "",
      },
      keyPress: false,
      currentPage: 0,
      resultsOnPage: "",
      results: 10,
      firstIsDisabled: false,
      lastIsDisabled: false,
      isActive: false,
    };
  },
  beforeMount(){
    return this.resultsOnPage = this.results;
  },
  async updated() {
    if (this.keyPress) {
      this.method.search = this.searching;
      await store.dispatch("getRegistrationsByFilter", this.method);
      this.keyPress = false;
    }
  },
  methods: {
    goToFirstPage(){
      this.currentPage = 0;
      this.lastIsDisabled = false
      this.firstIsDisabled = true;

    },
    goToLastPage(){
      this.currentPage = this.totalPagesResults - 1;
      this.firstIsDisabled = false;
      this.lastIsDisabled = true;
    },
    updateResultsPerPage(){
      this.resultsOnPage = this.results;
      if (this.resultsOnPage >= 0) {
        this.firstPageResults;
        this.lastPageResults;
        this.registrationsFiltered;
      } else {
        this.errorMessage = "Veuillez entrer un résultat supérieur à 0"
      }
    },
    updateMethod(newMethod) {
      this.currentPage = 0;
      this.resultsOnPage = 10;
      this.method.criteria = newMethod + "=";
      this.searching = "";
      this.registrationsFiltered;
    },
    search() {
      this.keyPress = true;
    },
    resultsToDisplay(index){
      this.isActive = true;
      this.firstIsDisabled = this.lastIsDisabled = false;
      this.currentPage = index;
      this.firstPageResults;
      this.lastPageResults;
      this.registrationsFiltered;
    }
  },
  computed: {
    totalRegistrations() {
      return store.getters.getRegistrationsByFilter;
    },
    firstPageResults(){
      return this.currentPage * this.resultsOnPage;
    },
    lastPageResults(){
      return this.firstPageResults + parseInt(this.resultsOnPage);
    },
    totalPagesResults() {
      let total = Math.ceil(this.totalRegistrations.length / this.resultsOnPage );
      return total;
    },
    registrationsFiltered() {
      //fetch all Registrations
      let msisdnToDisplay = store.getters.getRegistrationsByFilter;
      return msisdnToDisplay.slice(this.firstPageResults, this.lastPageResults);
    },

  },
};
</script>
