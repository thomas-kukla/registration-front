<template>
<div>
 <input
     v-model="newNumberOfResults"
     @keypress.enter="updateResultsPerPage()"
      class="form-control mt-1 ml-2 w-25"
      />
      <div>
        <nav aria-label="Page navigation example d-flex flex-row">
          <ul class="pagination justify-content-center d-flex flex-row">
            <li 
            @click="goToFirstPage()" 
            :class="{disabled:firstButtonIsDisabled}" 
            class="page-item"
            ><a class="page-link has-label">First</a>
            </li>
            <li 
            v-for="(page, index) in totalPagesResults" :key="index" 
            @click="resultsToDisplay(index)" 
            class="page-item">
              <a v-if="index === currentPage" class="page-link text-primary">{{ index + 1 }}</a>
              <a v-else class="page-link">{{ index + 1 }}</a>
            </li>
            <li 
            @click="goToLastPage()" 
            :class="{disabled:lastButtonIsDisabled}" 
            class="page-item">
            <a class="page-link has-label">Last</a>
            </li>
          </ul>
        </nav> 
      </div>
    </div>
</template>

<script>
export default {
  props:{
    dataToDisplay:{
      type: Array,
      default: null,
    },
  },
  data(){
    return {
      newNumberOfResults: null,
      firstButtonIsDisabled: false,
      lastButtonIsDisabled: false,
      currentPage: 0,
      numberOfResults: 10,
    }
  },
  //Fill up number of results with a default value
  beforeMount(){
    return this.newNumberOfResults = this.numberOfResults;
  },
  methods:{
    //  goToFirstPage(){
    //   this.currentPage = 0;
    //   this.lastButtonIsDisabled = false
    //   this.firstButtonIsDisabled = true;

    // },
    // goToLastPage(){
    //   this.currentPage = this.totalPagesResults - 1;
    //   this.firstButtonIsDisabled = false;
    //   this.lastButtonIsDisabled = true;
    // },
    // updateResultsPerPage(){
    //   this.numberOfResults = this.results;
    //   if (this.numberOfResults >= 0) {
    //     this.firstIndex;
    //     this.lastIndex;
    //   } else {
    //     this.errorMessage = "Veuillez entrer un résultat supérieur à 0"
    //   }
    // },

    // make a new slicer for the parent
    resultsToDisplay(index){
      this.firstButtonIsDisabled = this.lastButtonIsDisabled = false;
      this.totalPagesResults;

      // if current page changed, it make a new slicer with new index
      this.currentPage = index;
      let slicer= {
        firstIndex: this.firstIndex,
        lastIndex: this.lastIndex,
      };

      // send to the parent the new slicer
      this.$emit('newDataToDisplay', slicer)
    }
  },
  computed:{
    totalPagesResults(){
      let total = Math.ceil(this.dataToDisplay.length / this.numberOfResults );
      return total;
    },
    firstIndex(){
      return this.currentPage * this.numberOfResults;
    },
    lastIndex(){
      return this.firstIndex + parseInt(this.numberOfResults);
    },
  }
};
</script>
