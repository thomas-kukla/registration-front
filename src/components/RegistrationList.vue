<template>
  <div>
    <!-- <h3 class="mt-3">{{registrationCount}} Registrations on page</h3> -->
    <input v-model="searching" placeholder="Subscriber msisdn" class="d-flex ml-2 w-25"/>
    {{searching}}
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
          <!-- {{ JSON.parse(this.users)._embedded.registrationfile }} -->
          <!-- JSON.parse(users)._embedded.registrationfile" :key="users.id -->
          <tr v-for="users in search" :key="users.id">
            <th scope="row">{{ users.id }}</th>
            <th scope="row">{{ users.subscriberMsisdn }}</th>
            <th scope="row">{{ users.createdDate }}</th>
            <th scope="row">{{ users.state }}</th>
            <th scope="row">{{ users.operationType }}</th>
            <th><router-link :to="{
                name: 'userDetails',
                params: {userId : users.id}
                }" class="btn btn-primary">View</router-link>
            <router-view :key="$route.path"/></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  props:['users'],
  data(){
    return {
      searching:"",
      test:""
    }
  },
  computed: {
    search() {
      let newFilter = new RegExp(this.searching, 'i')
      let test = "";
      let newUsers = JSON.parse(this.users)._embedded.registrationfile;
      for(let user of JSON.parse(this.users)._embedded.registrationfile){
        test = newUsers.filter(user => user.subscriberMsisdn.match(newFilter))
        console.log("user", user)
      }
      return test
     },
    // registrationCount() {
    //   let count = JSON.parse(this.users)._embedded.registrationfile.length;
    //   return count;
    // }
  }
}
</script>