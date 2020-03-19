<template>
  <div>
    <div class="d'flex flex-row">
        <h3 class="mt-3">{{ search.length }} process(es) on page</h3>
        <input v-model="searching" placeholder="Subscriber msisdn" class="mt-2 ml-2 w-25"/>
      </div>
    <div class="table-responsive mt-3">
     <table class="table users">
        <thead>
          <tr>
            <th scope="col">Subscriber msisdn</th>
            <th scope="col">Process File id</th>
            <th scope="col">Id</th>          
            <th scope="col">Process Created Date</th>
            <th scope="col">Process Last modified date</th>
            <th scope="col">View Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="process in search" :key="process.id">    
              <th scope="row">{{process.context.SUBSCRIBER_MSISDN}}</th>
              <th scope="row">{{process.fileId}}</th>
              <th scope="row">{{process.id}}</th>
              <th scope="row">{{process.createdDate}}</th>
              <th scope="row">{{process.lastModifiedDate}}</th>
              <th><router-link :to="{
                name:'processDetails',
                params: {processId : process.id }
                }"
              class="btn btn-primary">View</router-link>
              <router-view :key="$route.path"/></th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  props:['processes'],
  data() {
    return{
      searching:""
    }
  },
  computed: {
    search(){
      // create a new regex filter with the v-model "searching" to catch user's search
      const newFilter = new RegExp(this.searching, 'i')
      // filter all the processes and return processes matching regex filter
      let subscriber = this.processes.filter(process => process.context.SUBSCRIBER_MSISDN.match(newFilter))
      return subscriber
    },
  }
}
</script>
