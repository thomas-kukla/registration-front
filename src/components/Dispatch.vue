<template>
  <div class="form-group w-25 mt-3 ml-2">
      <select v-model="methodChoosen" @change="chooseMethods()" class="custom-select">
        <option value="">Criterias</option>
        <option value="getProcessesByMsisdn">Subscriber Msisdn</option>
        <option value="getProcessesByFileId">Process File Id</option>
        <option value="getProcessesById">Id</option>
        <option value="getProcessesByCreatedDate">Process Created Date</option>
        <option value="getProcessesByLastModifieDate">Process Last modified date</option>
      </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methodChoosen:"",
    }
  },
  methods: {
    chooseMethods(){
      this.$emit('methods', this.methodChoosen)
    }
  }
}
</script>

