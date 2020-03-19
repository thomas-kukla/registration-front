<template>
  <div class="registration">
    <process :processes="processes" />
  </div>
</template>

<script>

import Process from "@/components/ProcessesList.vue"
import store from "@/store/index.js"

export default {
  data() {
    return {
      errorMessage:""
    }
  },
  components: {
    Process
  },
   beforeRouteEnter (to, from, next) {
     store
    .dispatch("getProcesses")
    .then()
    next()
  },
  computed: {
    processes: function() {
      return this.$store.getters.getProcesses
    }
  },
}
</script>