<template>
  <div class="form-group w-25 mt-3 ml-2">
      <select v-model="methodChoosen" @change="chooseMethods()" class="custom-select">
        <option value="">Criterias</option>
        <option v-if="processesView" value="getProcessesByMsisdn">Process Subscriber Msisdn</option>
        <option v-if="processesView" value="getProcessesByFileId">Process File Id</option>
        <option v-if="processesView" value="getProcessesById">Process Id</option>
        <option v-if="processesView" value="getProcessesByCreatedDate">Process Created Date</option>
        <option v-if="processesView" value="getProcessesByLastModifieDate">Process Last modified date</option>
        <option v-if="registrationsView" value="getRegistrationsByFileId">Registration File Id</option>
        <option v-if="registrationsView" value="getRegistrationsByMsisdn">Registration Subscriber Msisdn</option>
        <option v-if="registrationsView" value="getRegistrationsByState">State</option>
        <option v-if="registrationsView" value="getRegistrationsByOperationType">Operation Type</option>
        <option v-if="registrationsView" value="getRegistrationsByCreatedDate">Created Date</option>
      </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methodChoosen:"",
      processesView: false,
      registrationsView: false,
    }
  },
  beforeMount(){
    if(this.$router.history.current.name == "registrations"){
      return this.registrationsView = true;
    }
    if(this.$router.history.current.name == "processes"){
      return this.processesView = true;
    }
  },
  methods: {
    chooseMethods(){
      this.$emit('methods', this.methodChoosen)
    }
  },
}
</script>

