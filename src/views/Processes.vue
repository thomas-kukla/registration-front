<template>
  <div class="registration">
    <div>
       <criterion @criterion="updateCriterion" />
      <input
        @keydown="search()"
        v-model="searching"
        placeholder="Filter"
        class="mt-3 ml-2 w-25 form-control"
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
            <a v-if="currentPage ===  index" class="page-link text-primary">{{ index + 1 }}</a>
            <a v-else class="page-link">{{ index + 1 }}</a>
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
    <processes-list :processes=" processesFiltered" />
  </div>
</template>

<script>
import Criterion from "@/components/TheCriterionSelector.vue";
import ProcessesList from "@/components/ProcessesList.vue";
import store from "@/store/index.js";

export default {
  components: {
    Criterion,
    ProcessesList,
  },
  data() {
    return {
      errorMessage: null,
      searching: "",
      criterion: {
        type: "",
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
      this.currentPage = 0;
      this.updateResultsPerPage;
      this.criterion.search = this.searching;
      await store.dispatch("getProcessesByFilter", this.criterion);
      this.keyPress = false;
    }
  },
  methods: {
    // NAVIGATION BUTTONS
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
    // Enable user to choose number of results on page
    updateResultsPerPage(){
      this.resultsOnPage = this.results;
      if (this.resultsOnPage >= 0) {
    // reinitialize the slice method to avoid empty block
        this.firstPageResults;
        this.lastPageResults;
        this.processesFiltered;
      } else {
        this.errorMessage = "Veuillez entrer un résultat supérieur à 0"
      }
    },
    updateCriterion(newCriterion) {
      this.currentPage = 0;
      this.updateResultsPerPage;
      this.criterion.type = newCriterion + "=";
      this.searching = "";
      this.processesFiltered;
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
      this.processesFiltered;
    }
  },
  computed: {
    // PAGINATION
    // Create indexes to display blocks of data with slice Criterions 
    firstPageResults(){
      return this.currentPage * this.resultsOnPage;
    },
    lastPageResults(){
      return this.firstPageResults + parseInt(this.resultsOnPage);
    },
    totalPagesResults() {
      let total = Math.ceil(this.totalProcesses.length / this.resultsOnPage );
      return total;
    },
    // FETCH DATA
    totalProcesses() {
      return store.getters.getProcessesByFilter;
    },
    //fetch all Registrations and slice them into blocks with indexes to make a pagination system
    processesFiltered() {
      let msisdnToDisplay = store.getters.getProcessesByFilter
      return msisdnToDisplay.slice(this.firstPageResults, this.lastPageResults);
    },
  },
};
</script>
