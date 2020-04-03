<template>
  <div class="registration">
    <div class="d-flex">
      <Dispatch @methods="updateMethod"/>
      <input v-model="searching" placeholder="Filter" class="mt-3 ml-2 w-25 form-control"/>
      <Results @resultsToDisplay="updatePageSize"/>
    </div>
    <Pagination 
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
    <Pagination
      v-if="totalProcesses.length > 0"
      :pagesToDisplay="totalProcesses" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    />
  </div>
</template>

<script>

import Dispatch from "@/components/Dispatch.vue"
import Pagination from "@/components/Pagination.vue"
import Process from "@/components/ProcessesList.vue"
import Results from "@/components/Results.vue"
import store from "@/store/index.js"

export default {
  components: {
    Dispatch,
    Pagination,
    Process,
    Results,
  },
  data() {
    return {
      errorMessage:"",
      currentPage: 0,
      pageSize: 10,
      searching:"",
    }
  },
  beforeRouteEnter (to, from, next) {
    // enable to fetch processes before render th page
     store
    .dispatch('getProcessesByMsisdn',"")
    .then()
    next()
  },
  updated(){
    // enable to fetch processes in live with the filter
    store
    .dispatch(this.method, this.searching)
    .then()
  },
  methods: {
    // catch the event emit by the click on the navigations arrows and change currentPage
    // in computed, it enables to display the next processes
    updatePage(pageNumber){
      this.currentPage = pageNumber;
    },
    updatePageSize(newPageSize){
      this.currentPage = 0;
      this.pageSize = newPageSize;
      this.processesMsisdn;
    },
    updateMethod(newMethod){
      console.log("new Method", newMethod)
      this.method = newMethod;
    },
  },
  computed: {
    processesMsisdn(){
      //fetch all processes
      let msisdnToDisplay = store.getters.getProcessesByMsisdn;

      // Define two variables to slice processes
      // with the updatePage's method, it enables to display each slice by changing the currentPage
      let a = this.currentPage * this.pageSize;

      //using parseInt to avoid concatenation instead of addition
      let b = a + parseInt(this.pageSize);

      return msisdnToDisplay.slice(a, b);
    },
    totalProcesses(){
      return store.getters.getProcessesByMsisdn;
    }
  },
}
</script>