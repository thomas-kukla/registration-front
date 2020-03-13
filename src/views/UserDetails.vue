<template>
<div>
    <user-details :userDetails="userFromBackend"/>
</div>
</template>

<script>

import UserDetails from "@/components/UserDetails.vue"

export default {
    components: {
        UserDetails
    },
    data(){
        return {
            errormessage:"",
        }
    },
    props: ['userId'],
    beforeMount:
        function() {
            this.$store.dispatch("getUserById", this.$route.params.userId)
            .then(() => {
            })
            .catch(error => {
                this.errormessage = error
            })
        },
    computed: {
        userFromBackend: function() {
      return this.$store.getters.getUser
    }
  },
}

</script>