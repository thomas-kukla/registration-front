<template>
  <div class="registration">
    <input v-model="searching" placeholder="Subscriber msisdn" class="mt-4 ml-2 w-25 form-control"/>
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

import Process from "@/components/ProcessesList.vue"
import Pagination from "@/components/Pagination.vue"
import store from "@/store/index.js"

export default {
  components: {
    Process,
    Pagination,
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
    // enable to fetch processes in live with the input
    store
    .dispatch('getProcessesByMsisdn', this.searching)
    .then()
  },
  methods: {
    // catch the event emit by the click on the navigations arrows and change currentPage
    // in computed, it enables to display the next processes
    updatePage(pageNumber){
      this.currentPage = pageNumber;
    },
  },
  computed: {
    processesMsisdn(){
      let msisdn = store.getters.getProcessesByMsisdn;
      if(msisdn.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
      // stock processes in slices
      // updatePage's method enables to display each slices by changing the currentPage
      return msisdn.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    },
    totalProcesses(){
      return store.getters.getProcessesByMsisdn;
    }
  },
}
</script>