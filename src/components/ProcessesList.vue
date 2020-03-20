<template>
  <div>
    <div class="d'flex flex-row">
        <h3 class="mt-3">{{ search.length }} process(es) on page</h3>
        <input v-model="searching" placeholder="Subscriber msisdn" class="mt-2 ml-2 w-25"/>
        <Pagination 
        :processes="processes" 
        :currentPage="currentPage" 
        :pageSize="pageSize"
        @newPages="updatePage"
        />
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
          <tr v-for="process in visibleProcesses" :key="process.id">    
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

import Pagination from "@/components/Pagination.vue"

export default {
  components: {
    Pagination
  },
  props:['processes', 'currentPage', 'pageSize'],
  data() {
    return{
      searching:"",
      visibleProcesses : [],
    }
  },
  created () {
    return this.search()
  },
  computed: {
    search(){
      // create a new regex filter with the v-model "searching" to catch user's search
      const newFilter = new RegExp(this.searching, 'i')
      // filter all the processes and return processes matching regex filter
      let subscriber = this.processes.filter(process => process.context.SUBSCRIBER_MSISDN.match(newFilter))
      return subscriber
    },
  },
  beforeMount(){
    this.updateVisibleProcesses()
  },
  methods: {
    updatePage(pageNumber){
      console.log("yoyo update page, on se met à jour ou bien ?",pageNumber)
      this.updateVisibleProcesses();
      return this.currentPage = pageNumber;
    },
    updateVisibleProcesses(){
      this.visibleProcesses =  this.processes.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      console.log("visibleProcesses",this.visibleProcesses)
      // if 0 visible processes go back a page 
      if(this.visibleProcesses.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1)
      }
    }
  }
}
</script>
