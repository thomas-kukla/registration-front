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
     store
    .dispatch("getUsersByMsisdn","")
    .then()
    next()
  },
  updated(){
    store
    .dispatch("getUsersByMsisdn",this.searching)
    .then()
  },
  methods: {
    updatePage(pageNumber){
      return this.currentPage = pageNumber;
    }
  },
  computed: {
    usersMsisdn(){
      let msisdn = this.$store.getters.getUsersByMsisdn
      return msisdn.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
    },
    totalUsers() {
      return this.$store.getters.getUsersByMsisdn
    },
  },
}
</script>