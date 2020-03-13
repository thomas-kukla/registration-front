<template>
  <div>
    <h3 class="mt-3">{{registrationCount}} registrations on page</h3>
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
          <tr v-for="user in search" :key="user.id">
            <th scope="row">{{user.fileId}}</th>
            <th scope="col">{{user.kycFields[0]["value"]}}</th>
            <th scope="col">{{user.createdDate}}</th>
            <th scope="col">{{user.state}}</th>
            <th scope="col">{{user.operationType}}</th>
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
  props:['users', 'msisdn'],
  data() {
    return{
      searching:""
    }
  },
  computed: {
    search() {
      let user = [];
      this.users.forEach(function(value){
        user.push(value.kycFields[0]["value"])
      })
      //let newFilter = new RegExp(this.searching, 'i')
      return this.users
    },
    registrationCount() {
      return this.users.length;
    }
  }
}
</script>

<style scoped>

</style>
