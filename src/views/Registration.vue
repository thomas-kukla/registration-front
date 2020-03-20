<template>
  <div class="registration">
    <registration-list :users="users" :currentPage="currentPage" :pageSize="pageSize"/>
  </div>
</template>

<script>

import RegistrationList from "@/components/RegistrationList"
import store from "@/store/index.js"

export default {
  components: {
    RegistrationList
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
    users: function() {
      return this.$store.getters.getUsers
    },
  },
}
</script>