<template>
  <div>
    <go-back />
    <h3 class="d-flex mt-3 ml-2">
      Details from omFileId : {{ process.fileId }}
    </h3>
    <table class="table">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody class="flex-column w-100">
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left">Id :</th>
          <td class="w-100 text-left">{{ process.id }}</td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left">Created Date :</th>
          <td class="w-100 text-left">{{ process.createdDate }}</td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left ">Last Modified Date :</th>
          <td class="w-100 text-left">{{ process.lastModifiedDate }}</td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left">Subscriber Msisdn:</th>
          <td class="w-100 text-left">{{ process.subscriberMsisdn }}</td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left">Context :</th>
          <td class="w-100 text-left">{{ process.context }}</td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left">Tasks :</th>
          <td>
            <ul class="list-unstyled">
              <li class="" v-for="(value, index) in process.tasks" :key="index">
                <p class="row font-weight-bold">
                  <u>{{ value.friendlyName }}</u>
                </p>
                <p class="row">Start Date: {{ value.startDate }}</p>
                <p class="row">End Date: {{ value.endDate }}</p>
                <p class="row">Retry Policy : {{ value.retryPolicy }}</p>
                <p class="row">
                  Attempt : {{ value.attempts[0].attemptResult }}
                </p>
                <ul>
                  <td class="d-flex row justify-content-start">
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
