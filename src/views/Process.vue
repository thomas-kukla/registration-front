<template>
  <div class="registration">
    <input v-model="searching" placeholder="Subscriber msisdn" class="mt-2 ml-2 w-25 form-control"/>
    <Pagination 
      :pagesToDisplay="allProcesses" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    />
    <process 
    :processes="visibleProcesses" 
    :currentPage="currentPage" 
    :pageSize="pageSize"
    />
    <Pagination 
      :pagesToDisplay="allProcesses" 
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
     store
    .dispatch("getProcesses")
    .then()
    next()
  },
  beforeMount(){
    this.visibleProcesses()
  },
  methods: {
    updatePage(pageNumber){
      this.currentPage = pageNumber;
      this.visibleProcesses();
    },
  },
  computed: {
    visibleProcesses: function() {
      let processes = this.$store.getters.getProcesses;
      if(processes.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1)
      }
      return processes.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    },
    allProcesses: function(){
     return this.$store.getters.getProcesses;
    }
    // search(){
    //   // create a new regex filter with the v-model "searching" to catch user's search
    //   const newFilter = new RegExp(this.searching, 'i')
    //   // filter all the processes and return processes matching regex filter
    //   let subscriber = this.visibleProcesses.filter(process => process.context.SUBSCRIBER_MSISDN.match(newFilter))
    //   return subscriber
    // },
  },
}
</script>