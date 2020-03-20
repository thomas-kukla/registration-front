<template>
  <div>
    <div class="d'flex flex-row">
      <h3 class="mt-3">{{ search.length }} registration(s) on page</h3>
      <input v-model="searching" placeholder="Subscriber msisdn" class="mt-2 ml-2 w-25"/>
        <Pagination 
        :pagesToDisplay="users" 
        :currentPage="currentPage" 
        :pageSize="pageSize"
        @update="updatePage"
        />
    </div>
    <div class="table-responsive mt-3">
     <table class="table users">
        <thead>
          <tr>
            <th scope="col">File id</th>
            <th scope="col">Subscriber msisdn</th>
            <th scope="col">Created Date</th>
            <th scope="col">State</th>
            <th scope="col">Operation type</th>
            <th scope="col">View Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in search" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <th scope="row">{{ user.subscriberMsisdn }}</th>
            <th scope="row">{{ user.createdDate }}</th>
            <th scope="row">{{ user.state }}</th>
            <th scope="row">{{ user.operationType }}</th>
            <th><router-link :to="{
                name: 'userDetails',
                params: {userId : user.id}
                }" class="btn btn-primary">View</router-link>
            <router-view :key="$route.path"/></th>
          </tr>
        </tbody>
      </table>
    </div>
        <Pagination 
        :pagesToDisplay="users" 
        :currentPage="currentPage" 
        :pageSize="pageSize"
        @update="updatePage"
        />
  </div>
</template>

<script>

import Pagination from "@/components/Pagination.vue"

export default {
  components: {
    Pagination
  },
  props:['users', 'currentPage', 'pageSize',],
  data(){
    return {
      searching:"",
      visibleUsers: []
    }
  },
    beforeMount(){
    this.updateVisibleUsers()
  },
  computed: {
    search() {
      const newFilter = new RegExp(this.searching, 'i');
      let searchingUser = this.visibleUsers.filter(user => user.subscriberMsisdn.match(newFilter));
      return searchingUser;
     },
  },
  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleUsers();
    },
    updateVisibleUsers() {
      this.visibleUsers = this.users.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

      if(this.visibleUsers == 0 && this.currentPage > 0){
        this.updatePage(this.currentPage - 1);
      }
    }
  }
}
</script>