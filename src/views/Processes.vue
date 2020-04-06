<template>
  <div class="registration">
    <input @keyup="search()" v-model="searching" placeholder="Subscriber msisdn" class="mt-4 ml-2 w-25 form-control"/>
    <Results @resultsToDisplay="updatePageSize"/>
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

import Pagination from "@/components/Pagination.vue"
import Process from "@/components/ProcessesList.vue"
import Results from "@/components/Results.vue"
import store from "@/store/index.js"

export default {
  components: {
    Process,
    Pagination,
    Results,
  },
  data() {
    return {
      errorMessage:"",
      currentPage: 0,
      pageSize: 10,
      searching:"",
      keyPress:false,
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
    //enable to fetch processes in live with the input
    if (this.keyPress){
    store
    .dispatch('getProcessesByMsisdn', this.searching)
    .then();
    this.keyPress = false;
    }
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
    search(){
    this.keyPress = true;
  }
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