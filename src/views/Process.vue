<template>
  <div>
    <p v-if="errorMessage">Message d'erreur : {{ errorMessage }}</p>
    <process-details :process="process" />
  </div>
</template>

<script>
import ProcessDetails from "@/components/ProcessesListDetails";

export default {
  props: {
    processId: {
      type: String,
      default: null,
    },
  },
  components: {
    ProcessDetails,
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  beforeMount() {
    this.$store
      .dispatch("getProcessById", this.$route.params.processId)
      .then()
      .catch((error) => {
        this.errorMessage = error;
      });
  },
  computed: {
    process() {
      return this.$store.getters.getProcessById;
    },
  },
};
</script>
