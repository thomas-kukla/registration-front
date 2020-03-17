<template>
  <div class="registration">
    <registration-list :users="users"/>
  </div>
</template>

<script>

import RegistrationList from "@/components/RegistrationList"
export default {
  components: {
    RegistrationList
  },
  beforeMount: 
  function() {
    this.$store.dispatch("getUsersFromBack")
    .then(() => {

    })
    .catch(error => {
      this.errorMessage = error;
    })
  },
  computed: {
    users: function() {
      return this.$store.getters.getUsers
    },
  },
}
</script>