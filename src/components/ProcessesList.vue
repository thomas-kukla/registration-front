<template>
  <div>
      <h3 v-if="numberOfProcesses > 1" class="mt-4">{{ numberOfProcesses }} processes on page</h3>
      <h3 v-else  class="mt-4">{{ numberOfProcesses }} process on page</h3>
    <div class="table-responsive mt-3">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Subscriber msisdn</th>
            <th scope="col">Process File id</th>
            <th scope="col">Id</th>
            <th scope="col">Process Created Date</th>
            <th scope="col">Process Last modified date</th>
            <th scope="col">View Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(process, index) in processes" :key="index" @click="getId(index)">
            <td class="font-weight-bold" scope="row">{{ index + 1 }}</td>
            <td scope="row">{{ process.subscriberMsisdn }}</td>
            <td scope="row">{{ process.fileId }}</td>
            <td scope="row">{{ process.id }}</td>
            <td scope="row">{{ process.createdDate }}</td>
            <td scope="row">{{ process.lastModifiedDate }}</td>
            <td>
              <router-link
                :to="{
                  name: 'process',
                  params: { processId: process.id },
                }"
                class="btn btn-primary"
                >View</router-link
              >
              <router-view :key="$route.path" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    processes: {
      type: Array,
      default: null,
    },
  },
  methods:{
    getId(index){
      let id = this.processes[index].id
      this.$router.push({ name: 'process', params: { processId: id }})
    }
  },
  computed: {
    numberOfProcesses(){
      return this.processes.length;
    }
  }
};
</script>
