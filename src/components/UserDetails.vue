<template>
  <div>
     <go-back />
    <h3 class="d-flex mt-3 ml-2">Details from omFileId : {{ userDetails.fileId }} </h3>
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
              <td class="w-100 d-flex" scope="col">{{ userDetails.id }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Created Date :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.createdDate }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Last Modified Date :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.lastModifiedDate }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Foreign File Id :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.foreignFileId }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">State :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.state  }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Targeted Offer :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.targetedOffer }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Operation Type :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.operationType }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Subscription Type :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.subscriptionType }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">KYC Fields :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.kycFields }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">CFT Status :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.cftStatus }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Om Account Created Date : </th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.omAccountCreatedDate }}</td>
          </tr>
             <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Sent For Validation At : : </th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.sentForValidationAt }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Validation :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.validation }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Applied Offer :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.appliedOffer }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Links :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.links }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Retailer Msisdn :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.retailerMsisdn }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Subscriber Msisdn :</th>
              <td class="w-100 d-flex" scope="col">{{ userDetails.subscriberMsisdn }}</td>

          </tr>
          </tbody>
      </table>
      <go-back />
  </div>
</template>

<script>

import GoBack from "@/components/GoBack.vue"

export default {
  components: {
    GoBack,
  },
  props:['userDetails'],
}

</script>

