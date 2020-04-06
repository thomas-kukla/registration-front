<template>
  <div>
    <input class="form-control mt-3 ml-2 w-25" v-model="results" @keypress.enter="display()" placeholder="Results"/>
    <h6 v-if="errorMessage">{{errorMessage}}</h6>
  </div>
</template>

<script>
export default {
  props:['pageSize'],
  data(){
    return {
      results:"",
      errorMessage:"",
    }
  },
  beforeMount(){
    this.results = this.pageSize;
  },
  methods: {
    display() {
      if (this.results <= 0) {
        this.results = 10;
        this.errorMessage = "Please enter a number > 0"
      } else {
        this.errorMessage = "";
        this.$emit('resultsToDisplay', this.results)
      }
    }
  },
}
</script>

