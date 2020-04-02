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
              <th class="w-25 d-flex" scope="col">Id :</th>
              <td class="w-100 d-flex" scope="col">{{ process.id }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Created Date :</th>
              <td class="w-100 d-flex" scope="col">{{ process.createdDate}}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Last Modified Date :</th>
              <td class="w-100 d-flex" scope="col">{{ process.lastModifiedDate }}</td>
          </tr><tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Subscriber Msisdn:</th>
              <td class="w-100 d-flex" scope="col">{{ process.subscriberMsisdn }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Context :</th>
              <td class="w-100 d-flex" scope="col">{{ process.context }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Tasks :</th>
              <td class="w-100 d-flex" scope="col">{{ process.tasks }}</td>
          </tr>
        </tbody>
        </table>
        <go-back />
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

