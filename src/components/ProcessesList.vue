<template>
  <div>
    <div class="d'flex flex-row">
        <h3 v-if="processes.length > 1" class="mt-3">{{ processes.length }} processes on page</h3>
        <h3 v-else class="mt-3">{{ processes.length }} process on page</h3>
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
          <tr v-for="process in processes" :key="process.id">    
              <th scope="row">{{process.subscriberMsisdn}}</th>
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
}
</script>
