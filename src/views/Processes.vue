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
    <results @resultsToDisplay="updatePageSize" :pageSize.sync="pageSize" />
    <pagination
      v-if="totalProcesses.length > 0"
      :pagesToDisplay="totalProcesses"
      :currentPage="currentPage"
      :pageSize="pageSize"
      @update="updatePage"
    />
    <process
      :processes="processesMsisdn"
      :currentPage="currentPage"
      :pageSize="pageSize"
    />
    <pagination
      v-if="totalProcesses.length > 0"
      :pagesToDisplay="totalProcesses"
      :currentPage="currentPage"
      :pageSize="pageSize"
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
      pageSize: 10,
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
    // in computed, it enables to display the next processes
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    updatePageSize(newPageSize) {
      this.currentPage = 0;
      this.pageSize = newPageSize;
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
    processesMsisdn() {
      //fetch all processes
      let msisdnToDisplay = store.getters.getProcessesByFilter;

      // Define two variables to slice processes
      // with the updatePage's method, it enables to display each slice by changing the currentPage
      let a = this.currentPage * this.pageSize;

      //using parseInt to avoid concatenation instead of addition
      let b = a + parseInt(this.pageSize);

      return msisdnToDisplay.slice(a, b);
    },
    totalProcesses() {
      return store.getters.getProcessesByFilter;
    },
  },
};
</script>
