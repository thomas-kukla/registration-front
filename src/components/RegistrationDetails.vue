<template>
  <div>
     <go-back />
    <h3 class="d-flex mt-3 ml-2">Details from omFileId : {{ registrationDetails.fileId }} </h3>
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
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.id }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Created Date :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.createdDate }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Last Modified Date :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.lastModifiedDate }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Foreign File Id :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.foreignFileId }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">State :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.state  }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Targeted Offer :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.targetedOffer }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Operation Type :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.operationType }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Subscription Type :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.subscriptionType }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">KYC Fields :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.kycFields }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">CFT Status :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.cftStatus }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Om Account Created Date : </th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.omAccountCreatedDate }}</td>
          </tr>
             <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Sent For Validation At : : </th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.sentForValidationAt }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Validation :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.validation }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Applied Offer :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.appliedOffer }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Links :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.links }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Retailer Msisdn :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.retailerMsisdn }}</td>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
              <th class="w-25 d-flex" scope="col">Subscriber Msisdn :</th>
              <td class="w-100 d-flex" scope="col">{{ registrationDetails.subscriberMsisdn }}</td>

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
  props:['registrationDetails'],
}

</script>

