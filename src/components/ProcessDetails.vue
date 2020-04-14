<template>
  <div>
     <go-back />
     <h3 class="d-flex mt-3 ml-2">Details from omFileId : {{ process.fileId }} </h3>
     <table class="table">
       <thead>
         <tr>
           <th>
           </th>
         </tr>
       </thead>
        <tbody class="d-flex flex-column w-100">
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex">Id :</th>
              <td class="w-100 d-flex">{{ process.id }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex">Created Date :</th>
              <td class="w-100 d-flex">{{ process.createdDate}}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex">Last Modified Date :</th>
              <td class="w-100 d-flex">{{ process.lastModifiedDate }}</td>
          </tr><tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex">Subscriber Msisdn:</th>
              <td class="w-100 d-flex">{{ process.subscriberMsisdn }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex">Context :</th>
              <td class="w-100 d-flex">{{ process.context }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex">Tasks :</th>
              <td>
                <ul class="list-unstyled">
                  <li class="" v-for="(value, index) in process.tasks" :key="index">                  
                    <p class="row"><b><u>{{ value.friendlyName }}</u></b></p>
                    <p class="row">Start Date: {{ value.startDate }}</p>
                    <p class="row">End Date: {{ value.endDate }}</p>
                    <p class="row">Retry Policy : {{  value.retryPolicy }}</p>
                    <p class="row" :class="{'bg-success': isActive, 'bg-warning': error, 'bg-light': other}">Attempt : {{  value.attempts[0].attemptResult }}</p>
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
        <go-back/>
  </div>
</template>

<script>

import GoBack from "@/components/GoBack.vue"

export default {
  props: ['process'],
  components: {
    GoBack,
  },
}
</script>
