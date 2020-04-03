<template>
  <div>
    <input class="form-control mt-3 ml-2 w-25" v-model="results" @keypress.enter="display()" placeholder="Results"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      results:10,
    }
  },
  methods: {
    display() {
      this.$emit('resultsToDisplay', this.results)
    }
  }
}
</script>

