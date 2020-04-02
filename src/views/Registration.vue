<template>
  <div class="registration">
    <registration-list :users="users"/>
    <!-- <Pagination 
      :pagesToDisplay="users" 
      :currentPage="currentPage" 
      :pageSize="pageSize"
      @update="updatePage"
    /> -->
  </div>
</template>

<script>

import RegistrationList from "@/components/RegistrationList"
//import Pagination from "@/components/Pagination.vue"
import store from "@/store/index.js"

export default {
  components: {
    RegistrationList,
    //Pagination
  },
  data(){
    return {
    errorMessage:"",
    currentPage: 0,
    pageSize: 10,
    }
  },
  beforeRouteEnter (to, from, next) {
     store
    .dispatch("getUsers")
    .then()
    next()
  },
  computed: {
    users() {
      return this.$store.getters.getUsers
    },
  },
}
</script>