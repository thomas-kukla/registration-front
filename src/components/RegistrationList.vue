<template>
  <div>
    <h3 class="mt-3">{{registrationCount}} Registrations on page</h3>
    <!-- <input v-model="searching" placeholder="Subscriber msisdn" class="d-flex ml-2 w-25"/>
    {{searching}} -->
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
          <!-- <th scope="row">{{ JSON.parse(users)._embedded.registrationfile }}</th> -->
          <tr v-for="users in JSON.parse(users)._embedded.registrationfile" :key="users.id">
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
  props:['users', 'msisdn'],
  //computed: {
  //   search() {
  //     let user = [];
  //     this.users.forEach(function(value){
  //       user.push(value.kycFields[0]["value"])
  //     })
  //     //let newFilter = new RegExp(this.searching, 'i')
  //     return this.users
     //},
    // registrationCount() {
    //   return this.users.length;
    // }
}
</script>