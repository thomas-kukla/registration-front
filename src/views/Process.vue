<template>
  <div class="registration">
    <input v-model="searching" placeholder="Subscriber msisdn" class="mt-4 ml-2 w-25 form-control"/>
    <Pagination 
      :pagesToDisplay="allMsisdn" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    />
    <process 
    :processes="visibleMsisdn" 
    :currentPage="currentPage" 
    :pageSize="pageSize"
    />
    <Pagination 
      :pagesToDisplay="allMsisdn" 
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
    .dispatch('getProcessesByMsisdn',"")
    .then()
    next()
  },
  updated(){
    store
    .dispatch('getProcessesByMsisdn', this.searching)
    .then()
  },
  methods: {
    updatePage(pageNumber){
      this.currentPage = pageNumber;
      //this.visibleMsisdn;
    },
  },
  computed: {
    visibleMsisdn(){
      let msisdn = store.getters.getProcessesByMsisdn;
      if(msisdn.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1)
      }
      return msisdn.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    },
    allMsisdn(){
      return store.getters.getProcessesByMsisdn;
    }
  },
}
</script>