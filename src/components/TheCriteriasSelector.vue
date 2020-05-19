<template>
  <div class="form-group w-25 mt-3 ml-2">
    <select
      v-model="methodChoosen"
      @change="chooseMethods()"
      class="custom-select"
    >
      <option value="subscriberMsisdn">Subscriber Msisdn</option>
      <option v-if="registrationsView" value="id">File Id</option>
      <option v-else value="fileId">File Id</option>
      <option v-if="processesView" value="id">Process Id</option>
      <option value="createdDate">Created Date</option>
      <option v-if="processesView" value="lastModifiedDate"
        >Last modified date</option
      >
      <option v-if="registrationsView" value="state">State</option>
      <option v-if="registrationsView" value="operationType"
        >Operation Type</option
      >
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methodChoosen: "",
      processesView: false,
      registrationsView: false,
    };
  },
  beforeMount() {
    this.methodChoosen = "subscriberMsisdn";
    this.chooseMethods();
    if (this.$router.history.current.name == "registrations") {
      this.registrationsView = true;
    }
    if (this.$router.history.current.name == "processes") {
      this.processesView = true;
    }
  },
  methods: {
    chooseMethods() {
      this.$emit("methods", this.methodChoosen);
    },
  },
};
</script>
