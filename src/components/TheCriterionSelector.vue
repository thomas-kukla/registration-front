<template>
  <div class="form-group w-25 mt-3 ml-2">
    <select
      v-model="criterionChoosen"
      @change="chooseCriterion()"
      class="custom-select"
    >
      <option value="subscriberMsisdn">Subscriber Msisdn</option>
      <option value="fileId">File Id</option>
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
      criterionChoosen: "",
      processesView: false,
      registrationsView: false,
    };
  },
  beforeMount() {
    this.criterionChoosen = "subscriberMsisdn";
    this.chooseCriterion();
    if (this.$router.history.current.name == "registrations") {
      this.registrationsView = true;
    }
    if (this.$router.history.current.name == "processes") {
      this.processesView = true;
    }
  },
  methods: {
    chooseCriterion() {
      this.$emit("criterion", this.criterionChoosen);
    },
  },
};
</script>
