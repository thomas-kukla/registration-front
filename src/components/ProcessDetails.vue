<template>
  <div>
    <go-back />
    <table class="table">
      <thead>
        <tr>
          <th class="text-left" colspan="3"><h3>Details from omFileId : {{ process.fileId }}</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-left">
          <th class="firstColumn">Id :</th>
          <td class="w-100">{{ process.id }}</td>
          <td></td>
        </tr>
        <tr class="text-left">
          <th>Created Date :</th>
          <td>{{ process.createdDate }}</td>
        </tr>
        <tr class="text-left">
          <th>Last Modified Date :</th>
          <td>{{ process.lastModifiedDate }}</td>
        </tr>
        <tr class="text-left">
          <th>Subscriber Msisdn:</th>
              <td>{{ process.subscriberMsisdn }}</td>
        </tr>
        <tr class="text-left">
          <th>Context :</th>
          <tbody>
            <tr v-for="(value, index) in process.context" :key="index" class="text-left">
              <td>{{ index }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </tr>
        <tr class="text-left">
          <th>Tasks :</th>
          <td colspan="2">
            <ul class="list-unstyled">
              <li class="" v-for="(value, index) in process.tasks" :key="index">
                <p class="row font-weight-bold">
                  <u>{{ value.friendlyName }}</u>
                </p>
                <p>Start Date: {{ value.startDate }}</p>
                <p>End Date: {{ value.endDate }}</p>
                <p>Retry Policy : {{ value.retryPolicy }}</p>
                <p :class="[value.attempts[0].attemptResult == 'SUCCESS' ? 'bg-success' : 'bg-warning']">
                  Attempt : {{ value.attempts[0].attemptResult }}
                </p>
                <ul>
                  <td class="text-left">
                    <li>
                      <p>Start Date : {{ value.attempts[0].startDate }}</p>
                    </li>
                    <li>
                      <p>Out : {{ value.attempts[0].out }}</p>
                    </li>
                  </td>
                </ul>
              </li>
            </ul>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <go-back />
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";

export default {
  props: {
    process: {
      type: Object,
      default: null,
    },
  },
  components: {
    GoBack,
  },
};
</script>

<style>

.firstColumn{
  width: 15%;
}

</style>
