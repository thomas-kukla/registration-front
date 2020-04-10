<template>
  <div class="form-group w-25 mt-3 ml-2">
      <select v-model="methodChoosen" @change="chooseMethods()" class="custom-select">
        <option value="">Criterias</option>
        <option value="subscriberMsisdn">Subscriber Msisdn</option>
        <option value="fileId">File Id</option>
        <option v-if="processesView" value="id">Process Id</option>
        <option value="createdDate">Created Date</option>
        <option v-if="processesView" value="lastModifieDate">Last modified date</option>
        <option v-if="registrationsView" value="state">State</option>
        <option v-if="registrationsView" value="operationType">Operation Type</option>
      </select>
  </div>
</template>

<script>
export default {
  //props:['registrations', 'processes'],
  data() {
    return {
      methodChoosen:"",
      processesView: false,
      registrationsView: false,
    }
  },
  beforeMount(){
    if(this.$router.history.current.name == "registrations"){
      this.registrationsView = true;
      console.log("processesView", this.processesView, "registrationsView", this.registrationsView)
    }
    if(this.$router.history.current.name == "processes"){
      this.processesView = true;
      console.log("processesView", this.processesView, "registrationsView", this.registrationsView)
    }
  },
  methods: {
    chooseMethods(){
      this.$emit('methods', this.methodChoosen)
    }
  },
}
</script>

