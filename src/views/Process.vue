<template>
  <div class="registration">
    <process :processes="processes" />
  </div>
</template>

<script>

import Process from "@/components/ProcessesList.vue"

export default {
  data() {
    return {
      errorMessage:""
    }
  },
  components: {
    Process
  },
   beforeMount: 
  function() {
    this.$store
    .dispatch("getProcesses")
    .then(() => {

    })
    .catch(error => {
      this.errorMessage = error;
    })
  },
  computed: {
    processes: function() {
      return this.$store.getters.getProcesses
    }
  },
}
</script>