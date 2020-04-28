<template>
  <div>
    <p v-if="errorMessage">Message d'erreur : {{ errorMessage }}</p>
    <registration-details :registrationDetails="registration" />
  </div>
</template>

<script>
import RegistrationDetails from "@/components/RegistrationDetails.vue";

export default {
  components: {
    RegistrationDetails,
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  props: ["registrationId"],
  beforeMount() {
    this.$store
      .dispatch("getRegistrationById", this.$route.params.registrationId)
      .then(() => {})
      .catch((error) => {
        this.errorMessage = error;
      });
  },
  computed: {
    registration() {
      return this.$store.getters.getRegistrationById;
    },
  },
};
</script>
