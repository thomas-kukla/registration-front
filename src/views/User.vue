<template>
<div>
    <p v-if="errorMessage">Message d'erreur : {{errorMessage}}</p>
    <user-details :userDetails="userFromBackend"/>
</div>
</template>

<script>

import UserDetails from "@/components/UserDetails.vue"
import store from "@/store/index.js"

export default {
    components: {
        UserDetails
    },
    data(){
        return {
            errorMessage:"",
        }
    },
    props: ['userId'],
    beforeMount() {
            store
            .dispatch("getUserById", this.$route.params.userId)
            .then(() => {
            })
            .catch(error => {
                this.errorMessage = error;
            })
        },
    computed: {
        userFromBackend() {
            return store.getters.getUser
    }
  },
}

</script>