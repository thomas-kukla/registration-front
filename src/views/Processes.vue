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
    <results @resultsToDisplay="updateNumberOfResults" :numberOfResults.sync="numberOfResults" />
    <pagination
      v-if="totalProcesses.length > 0"
      :pagesToDisplay="totalProcesses"
      :currentPage="currentPage"
      :numberOfResults="numberOfResults"
      @update="updatePage"
    />
    <process
      :processes="processesMsisdn"
      :currentPage="currentPage"
      :numberOfResults="numberOfResults"
    />
    <pagination
      v-if="totalProcesses.length > 0"
      :pagesToDisplay="totalProcesses"
      :currentPage="currentPage"
      :numberOfResults="numberOfResults"
      @update="updatePage"
    />
  </div>
</template>

<script>
import Dispatch from "@/components/Dispatch.vue";
import Pagination from "@/components/Pagination.vue";
import Process from "@/components/ProcessesList.vue";
import Results from "@/components/Results.vue";
import store from "@/store/index.js";

export default {
  components: {
    Dispatch,
    Pagination,
    Process,
    Results,
  },
  data() {
    return {
      errorMessage: "",
      currentPage: 0,
      numberOfResults: 10,
      searching: "",
      keyPress: false,
      method: {
        criteria: "",
        search: "",
      },
    };
  },
  updated() {
    //fetch processes in live with the input
    if (this.keyPress) {
      console.log("hello");
      this.method.search = this.searching;
      store.dispatch("getProcessesByFilter", this.method).then();
      this.keyPress = false;
    }
  },
  methods: {
    // catch the event emit by the click on the navigations arrows and change currentPage
    // it allows to display a new block of processes according to the number of results choosen for the page
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    updateNumberOfResults(newNumberOfResults) {
      this.currentPage = 0;
      this.numberOfResults = newNumberOfResults;
      this.searching = "";
      this.processesMsisdn;
    },
    updateMethod(newMethod) {
      this.method.criteria = newMethod + "=";
      this.searching = "";
      this.processesMsisdn;
    },
    search() {
      this.keyPress = true;
      this.processesMsisdn;
    },
  },
  computed: {
    firstResult(){
      return this.currentPage * this.numberOfResults;
    },
    lastResult(){
      return this.firstResult + parseInt(this.numberOfResults);
    },
    processesMsisdn() {
      //get all processes
      let msisdnToDisplay = store.getters.getProcessesByFilter

      //slice processes into blocks according to the number of results choosen for the page
      // a click on navigation's arrow enalble to display a new block
      return msisdnToDisplay.slice(this.firstResult, this.lastResult);
    },
    totalProcesses() {
      return store.getters.getProcessesByFilter;
    },
  },
};
</script>
