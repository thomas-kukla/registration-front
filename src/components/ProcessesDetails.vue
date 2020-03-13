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
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Id :</td>
              <td class="w-100 d-flex" scope="col">{{ process.id }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Created Date :</td>
              <td class="w-100 d-flex" scope="col">{{ process.createdDate.id }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Last Modified Date :</td>
              <td class="w-100 d-flex" scope="col">{{ process.lastModifiedDate }}</td>
            </th>
          </tr><tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Subscriber Msisdn:</td>
              <td class="w-100 d-flex" scope="col">{{ process.subscriberMsisdn }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Context :</td>
              <td class="w-100 d-flex" scope="col">{{ process.context }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Tasks :</td>
              <td class="w-100 d-flex" scope="col">{{ process.tasks }}</td>
            </th>
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
    GoBack
  },
}

</script>

