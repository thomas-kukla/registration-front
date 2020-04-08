<template>
    <div>
      <p v-if="errorMessage">Message d'erreur : {{errorMessage}}</p>
      <process-details :process="process"/>
    </div>
</template>

<script>

import ProcessDetails from "@/components/ProcessDetails"
import store from "@/store/index.js"

export default {
    props:['processId'],
    components: {
        ProcessDetails
    },
    data(){
      return {
        errorMessage:"",
      }
    },
    beforeMount() {
    store
    .dispatch("getProcessById", this.$route.params.processId)
    .then()
    .catch(error => {
      this.errorMessage = error;
    })
  },
    computed: {
    process(){
      console.log(store.getters.getProcessById)
        return store.getters.getProcessById
        }
    }
}

</script>