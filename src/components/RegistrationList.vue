<template>
  <div>
    <div class="d'flex flex-row">
        <h3 v-if="users.length > 1" class="mt-3">{{ users.length }} registrations on page</h3>
        <h3 v-else class="mt-3">{{ users.length }} registration on page</h3>
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
          <tr v-for="user in users" :key="user.id">
            <td scope="row">{{ user.id }}</td>
            <td scope="row">{{ user.subscriberMsisdn }}</td>
            <td scope="row">{{ user.createdDate }}</td>
            <td scope="row">{{ user.state }}</td>
            <td scope="row">{{ user.operationType }}</td>
            <td><router-link :to="{
                name: 'user',
                params: {userId : user.id}
                }" class="btn btn-primary">View</router-link>
            <router-view :key="$route.path"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props:['users'],
}
</script>