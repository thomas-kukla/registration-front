<template>
  <div>
    <go-back-button />
    <h3 class="d-flex mt-3 ml-2">
      Details from omFileId : {{ registrationDetails.fileId }}
    </h3>
    <table class="table">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody class="w-100">
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Id :</th>
          <td class="w-100 text-left" scope="col">{{ registrationDetails.id }}</td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Created Date :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.createdDate }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Last Modified Date :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.lastModifiedDate }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Foreign File Id :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.foreignFileId }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">State :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.state }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Targeted Offer :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.targetedOffer }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Operation Type :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.operationType }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Subscription Type :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.subscriptionType }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">KYC Fields :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.kycFields }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">CFT Status :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.cftStatus }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Om Account Created Date :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.omAccountCreatedDate }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Sent For Validation At :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.sentForValidationAt }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Validation :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.validation }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Applied Offer :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.appliedOffer }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Links :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.links }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Retailer Msisdn :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.retailerMsisdn }}
          </td>
        </tr>
        <tr class="w-100 justify-content-start">
          <th class="w-25 text-left" scope="col">Subscriber Msisdn :</th>
          <td class="w-100 text-left" scope="col">
            {{ registrationDetails.subscriberMsisdn }}
          </td>
        </tr>
      </tbody>
    </table>
    <go-back-button />
  </div>
</template>

<script>
import GoBackButton from "@/components/TheGoBackButton.vue";

export default {
  components: {
    GoBackButton,
  },
  props: {
    registrationDetails: {
      type: [Array, Object],
      default: null,
    },
  },
};
</script>
