<template>
  <div class="registration">
    <input v-model="searching" placeholder="Subscriber msisdn" class="mt-2 ml-2 w-25 form-control"/>
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
import store from "@/store/index.js"

export default {
  components: {
    RegistrationList,
    Pagination
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
    }
  },
  computed: {
    usersMsisdn(){
      let msisdn = this.$store.getters.getUsersByMsisdn;
      if(msisdn.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
      // stock processes in slices
      // updatePage's method enables to display each slices by changing the currentPage
      return msisdn.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    },
    totalUsers() {
      return this.$store.getters.getUsersByMsisdn;
    },
  },
}
</script>