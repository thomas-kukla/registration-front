<template>
  <span>
    <button class="mb-3 mt-3 btn btn-primary" @click="goBack">
      Back to registrations
    </button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
