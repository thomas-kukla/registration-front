<template>
  <div class="registration">
    <input v-model="searching" placeholder="Subscriber msisdn" class="mt-2 ml-2 w-25 form-control"/>
    <results @resultsToDisplay="updatePageSize"/>
    <Pagination 
      v-if="totalUsers.length > 0"
      :pagesToDisplay="totalUsers" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    />
    <registration-list :users="usersMsisdn"/>
    <Pagination
      v-if="totalUsers.length > 0"
      :pagesToDisplay="totalUsers" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    />
  </div>
</template>

<script>

import RegistrationList from "@/components/RegistrationList"
import Pagination from "@/components/Pagination.vue"
import Results from "@/components/Results.vue"
import store from "@/store/index.js"

export default {
  components: {
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
    }
  },
  beforeRouteEnter (to, from, next) {
    // enable to fetch processes before render th page
     store
    .dispatch("getUsersByMsisdn","")
    .then()
    next()
  },
  // enable to fetch processes in live with the input
  updated(){
    if (this.searching){
    store
    .dispatch("getUsersByMsisdn",this.searching)
    .then()
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
    }
  },
  computed: {
    usersMsisdn(){
      //fetch all users
      let msisdnToDisplay = this.$store.getters.getUsersByMsisdn;

      // Define two variables to slice processes
      // with the updatePage's method, it enables to display each slice by changing the currentPage
      let a = this.currentPage * this.pageSize;

      //using parseInt to avoid concatenation instead of addition
      let b = a + parseInt(this.pageSize);
      return msisdnToDisplay.slice(a, b);
    },
    totalUsers() {
      return this.$store.getters.getUsersByMsisdn;
    },
  },
}
</script>