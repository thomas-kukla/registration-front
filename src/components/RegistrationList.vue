<template>
  <div>
    <div class="d'flex flex-row">
      <h3 class="mt-3">{{ registrationCount }} registrations on page</h3>
      <input v-model="searching" placeholder="Subscriber msisdn" class="mt-2 ml-2 w-25"/>
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
  </div>
</template>

<script>

export default {
  props:['users'],
  data(){
    return {
      searching:"",
    }
  },
  computed: {
    search() {
      let newFilter = new RegExp(this.searching, 'i')
      let searchingUser = "";
      for(let user of this.users){
        searchingUser = this.users.filter(user => user.subscriberMsisdn.match(newFilter))
        console.log("user", user)
      }
      return searchingUser
     },
     registrationCount(){
       return this.users.length
     }
  }
}
</script>