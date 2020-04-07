<template>
  <div class="registration">
    <div>
      <Dispatch @methods="updateMethod"/>
      <input @keydown="search()" v-model="searching" placeholder="Filter" class="mt-2 ml-2 w-25 form-control"/>
    </div>
    <results @resultsToDisplay="updatePageSize"/>
    <Pagination 
      v-if="totalRegistrations.length > 0"
      :pagesToDisplay="totalRegistrations" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    />
    <registration-list :registrations="registrationsMsisdn"/>
    <Pagination
      v-if="totalRegistrations.length > 0"
      :pagesToDisplay="totalRegistrations" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    />
  </div>
</template>

<script>

import Dispatch from "@/components/Dispatch.vue"
import RegistrationList from "@/components/RegistrationList"
import Pagination from "@/components/Pagination.vue"
import Results from "@/components/Results.vue"
import store from "@/store/index.js"

export default {
  components: {
    Dispatch,
    RegistrationList,
    Pagination,
    Results,
  },
  data(){
    return {
    errorMessage:"",
    currentPage: 0,
    pageSize: 10,
    searching:"",
    method:"",
    keyPress:false,
    }
  },
    beforeMount(){
    store
    .dispatch('getRegistrations')
    .then()
  },
  beforeRouteEnter (to, from, next) {
    // enable to fetch processes before render th page
     store
    .dispatch("getRegistrationsByMsisdn","")
    .then()
    next()
  },
  // enable to fetch processes in live with the input
  updated(){
    if (this.keyPress){
    store
    .dispatch(this.method,this.searching)
    .then();
    this.keyPress = false;
    }
  },
  methods: {
    // catch the event emit by the click on the navigations arrows and change currentPage
    // in computed, it enables to display the next processes
    updatePage(pageNumber){
      return this.currentPage = pageNumber;
    },
    updatePageSize(newPageSize){
      this.currentPage = 0;
      this.pageSize = newPageSize;
      this.searching = "";
      this.RegistrationsMsisdn;
    },
    updateMethod(newMethod){
      this.method = newMethod;
      this.searching ="";
      this.RegistrationsMsisdn;
    },
    search(){
    this.keyPress = true;
    },
  },
  computed: {
    registrationsMsisdn(){
      //fetch all Registrations
      let msisdnToDisplay = this.$store.getters.getRegistrationsByFilter;

      // Define two variables to slice processes
      // with the updatePage's method, it enables to display each slice by changing the currentPage
      let a = this.currentPage * this.pageSize;

      //using parseInt to avoid concatenation instead of addition
      let b = a + parseInt(this.pageSize);
      return msisdnToDisplay.slice(a, b);
    },
    totalRegistrations() {
      return this.$store.getters.getRegistrations;
    },
  },
}
</script>