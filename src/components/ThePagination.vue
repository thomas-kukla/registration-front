<template>
<div>
 <input
     v-model="newNumberOfResults"
     @keypress.enter="updateResultsPerPage()"
      class="form-control mt-1 ml-2 w-25"
      />
      <h4>{{errorMessage}}</h4>
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
      errorMessage:"",
    }
  },
  //Fill up number of results with a default value
  beforeMount(){
    return this.newNumberOfResults = this.numberOfResults;
  },
  methods:{
    //NAVIGATION BUTTONS
     goToFirstPage(){
      this.lastButtonIsDisabled = false
      this.firstButtonIsDisabled = true;
      this.currentPage = 0;
      this.resultsToDisplay(this.currentPage);
    },
    goToLastPage(){ 
      this.firstButtonIsDisabled = false;
      this.lastButtonIsDisabled = true;
      this.currentPage = this.totalPagesResults - 1;
      this.resultsToDisplay(this.currentPage);
    },

    // RESULTS AND SLICER LOGICS
    updateResultsPerPage(){
      console.log('ThePagination / udpate results / number of results', this.numberOfResults, this.newNumberOfResults)
      if (this.newNumberOfResults > 0) {
        //reinitialize the error message if there is still one
        this.errorMessage = "";

        // reinitialize the slicer and return on the first page
        this.numberOfResults = this.newNumberOfResults;
        this.currentPage = 0;
        this.resultsToDisplay(this.currentPage);
      } else {
        this.newNumberOfResults = this.numberOfResults = 10;
        this.errorMessage = "Veuillez entrer un résultat supérieur à 0"
      }
    },
    // make a new slicer for the parent
    resultsToDisplay(index){
      this.firstButtonIsDisabled = this.lastButtonIsDisabled = false;
      this.totalPagesResults;

      // if current page changed, it makes a new slicer with new index
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
