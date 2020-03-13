<template>
    <div>
        <processes-details :process="process"/>
    </div>
</template>

<script>

import ProcessesDetails from "@/components/ProcessesDetails"

export default {
    props:['processId'],
    components: {
        ProcessesDetails
    },
    beforeMount: 
  function() {
    this.$store
    .dispatch("getProcessById", this.processId)
    .then(() => {

    })
    .catch(error => {
      this.errorMessage = error;
    })
  },
    computed: {
    process: function() {
        return this.$store.getters.getProcessById
        }
    }
}

</script>