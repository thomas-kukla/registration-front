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
            class="page-item"
            :class="{ disabled: firstButtonIsDisabled }" 
            ><a class="page-link has-label">First</a>
            </li>
            <li 
            v-for="(page, index) in totalPagesResults" :key="index" 
            @click="resultsToDisplay(index)" 
            class="page-item">
              <a v-if="index === initialSlicer.currentPage" class="page-link text-primary">{{ index + 1 }}</a>
              <a v-else class="page-link">{{ index + 1 }}</a>
            </li>
            <li 
            @click="goToLastPage()" 
            :class="{ disabled: lastButtonIsDisabled }" 
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
      type: Number,
      default: null,
    },
    initialSlicer:{
      type: Object,
    }
  },
  data(){
    return {
      newNumberOfResults: null,
      firstButtonIsDisabled: false,
      lastButtonIsDisabled: false,
      slicer: {
        firstIndex: this.initialSlicer.firstIndex,
        lastIndex: this.initialSlicer.lastIndex,
        currentPage: this.initialSlicer.currentPage,
        resultsOnPage: this.initialSlicer.resultsOnPage,
      },
      total: null,
      errorMessage:"",
    }
  },
  //Fill up number of results with a default value
  beforeMount(){
    this.total = 
    this.newNumberOfResults = this.slicer.resultsOnPage;
  },
  methods:{

    //NAVIGATION BUTTONS
     goToFirstPage(){
      this.lastButtonIsDisabled = false
      this.firstButtonIsDisabled = true;
      this.slicer.currentPage = 0;
      this.resultsToDisplay(this.slicer.currentPage);
    },
    goToLastPage(){ 
      this.firstButtonIsDisabled = false;
      this.lastButtonIsDisabled = true;
      this.slicer.currentPage = this.totalPagesResults - 1;
      this.resultsToDisplay(this.slicer.currentPage);
    },

    // RESULTS LOGIC
    updateResultsPerPage(){
      if (this.newNumberOfResults > 0) {
        //reinitialize the error message if there is still one
        this.errorMessage = "";

        // reinitialize the slicer and return on the first page
        this.slicer.resultsOnPage = this.newNumberOfResults;
        this.slicer.currentPage = 0;
        this.resultsToDisplay(this.slicer.currentPage);
      } else {
        this.newNumberOfResults = this.slicer.resultsOnPage = 10;
        this.errorMessage = "Veuillez entrer un résultat supérieur à 0"
      }
    },

    // SLICER LOGIC
    // make a new slicer for the parent
    resultsToDisplay(index){
      this.totalPagesResults;
      console.log(this.totalPagesResults)
      if (this.totalPagesResults <= 1){
        this.firstButtonIsDisabled = this.lastButtonIsDisabled = true;
        console.log(this.lastButtonIsDisabled)
      }

      // if current page changed, it makes a new slicer with new index
      this.slicer.currentPage = index;
      this.slicer.firstIndex = this.firstIndex;
      this.slicer.lastIndex = this.lastIndex;
      // send to the parent the new slicer
      this.$emit('newDataToDisplay', this.slicer);
      
      // active navigation's button
      this.firstButtonIsDisabled = this.lastButtonIsDisabled = false;
    }
  },
  computed:{
    totalPagesResults(){
      let total = Math.ceil(this.dataToDisplay / this.slicer.resultsOnPage );
      return total;
    },
    firstIndex(){
      return this.slicer.currentPage * this.slicer.resultsOnPage;
    },
    lastIndex(){
      return this.firstIndex + parseInt(this.slicer.resultsOnPage);
    },
  }
};
</script>
