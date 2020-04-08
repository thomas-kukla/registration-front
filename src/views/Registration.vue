<template>
  <div>
      <p v-if="errorMessage">Message d'erreur : {{errorMessage}}</p>
      <registration-details :registrationDetails="registration"/>
  </div>
</template>

<script>

import RegistrationDetails from "@/components/RegistrationDetails.vue"
import store from "@/store/index.js"

export default {
    components: {
        RegistrationDetails
    },
    data(){
        return {
            errorMessage:"",
        }
    },
    props: ['registrationId'],
    beforeMount() {
            store
            .dispatch("getRegistrationById", this.$route.params.registrationId)
            .then(() => {
            })
            .catch(error => {
                this.errorMessage = error;
            })
        },
    computed: {
        registration() {
            return store.getters.getRegistrationById;
    }
  },
}

</script>