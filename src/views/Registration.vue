<template>
  <div class="registration">
    <registration-list :users="users" :msisdn="msisdn"/>
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
    this.$store.dispatch("getMsisdn")
    .then(() => {

    })
    .catch(error => {
      this.errorMessage = error;
    })
  },
  computed: {
    msisdn: function() {
      return this.$store.getters.getMsisdn
    },
    users: function() {
      return this.$store.getters.getUsers
    },
  },
}
</script>