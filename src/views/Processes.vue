<template>
  <div class="registration">
    <div>
       <dispatch @methods="updateMethod" />
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
    <processes-list :processes=" processesFiltered" />
  </div>
</template>

<script>
import Dispatch from "@/components/Dispatch.vue";
import ProcessesList from "@/components/ProcessesList.vue";
import store from "@/store/index.js";

export default {
  components: {
    Dispatch,
    ProcessesList,
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
      this.currentPage = 0;
      this.updateResultsPerPage;
      this.method.search = this.searching;
      await store.dispatch("getProcessesByFilter", this.method);
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
      this.updateResultsPerPage;
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
    totalProcesses() {
      return store.getters.getProcessesByFilter;
    },
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
    processesFiltered() {
      let msisdnToDisplay = store.getters.getProcessesByFilter
      console.log(this.firstPageResults)
      return msisdnToDisplay.slice(this.firstPageResults, this.lastPageResults);
    },
  },
};
</script>
