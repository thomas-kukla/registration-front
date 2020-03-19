<template>
  <div class="registration">
    <registration-list :users="users"/>
  </div>
</template>

<script>

import RegistrationList from "@/components/RegistrationList"
import store from "@/store/index.js"

export default {
  components: {
    RegistrationList
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