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
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Id :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.id }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Created Date :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.createdDate }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Last Modified Date :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.lastModifiedDate }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Foreign File Id :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.foreignFileId }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">State :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.state  }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Targeted Offer :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.targetedOffer }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Operation Type :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.operationType }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Subscription Type :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.subscriptionType }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">KYC Fields :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.kycFields }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">CFT Status :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.cftStatus }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Om Account Created Date : </td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.omAccountCreatedDate }}</td>
            </th>
          </tr>
             <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Sent For Validation At : : </td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.sentForValidationAt }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Validation :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.validation }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Applied Offer :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.appliedOffer }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Links :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.links }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Retailer Msisdn :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.retailerMsisdn }}</td>
            </th>
          </tr>
          <tr class="w-100 d-flex justify-content-start">
            <th class="w-100 d-flex">
              <td class="w-25 d-flex" scope="col">Subscriber Msisdn :</td>
              <td class="w-100 d-flex" scope="col">{{ userDetails.subscriberMsisdn }}</td>

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
  components: {
    GoBack
  },
  props:['userDetails'],
}

</script>

