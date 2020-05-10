<template>
  <div>
    <div class="table-responsive mt-3 table-hover">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">File id</th>
            <th scope="col">Subscriber msisdn</th>
            <th scope="col">Created Date</th>
            <th scope="col">State</th>
            <th scope="col">Operation type</th>
            <th scope="col">View Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(registration,index) in registrations" :key="index">
            <td class="font-weight-bold" scope="row">{{index + 1}}</td> 
            <td scope="row">{{ registration.id }}</td>
            <td scope="row">{{ registration.subscriberMsisdn }}</td>
            <td scope="row">{{ registration.createdDate }}</td>
            <td scope="row">{{ registration.state }}</td>
            <td scope="row">{{ registration.operationType }}</td>
            <td>
              <router-link
                :to="{
                  name: 'registration',
                  params: { registrationId: registration.id },
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
    registrations: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>

</style>
