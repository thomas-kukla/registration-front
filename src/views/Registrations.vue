<template>
  <div class="registration">
    <div>
      <criteria @methods="updateCriteriaSearch" />
      <input
        @keydown="search()"
        v-model="searching"
        placeholder="Filter"
        class="mt-2 ml-2 w-25 form-control"
      />
    </div>
    <pagination 
      :dataToDisplay="total" 
      :initialSlicer="slicer"
      @newDataToDisplay="newData($event)"
    />

    <registrations-list :registrations="registrationsToDisplay" />
  </div>
</template>

<script>
import Criteria from "@/components/TheCriteriasSelector.vue";
import RegistrationsList from "@/components/RegistrationsList";
import Pagination from "@/components/ThePagination.vue";

export default {
  components: {
    Criteria,
    RegistrationsList,
    Pagination,
  },
  data() {
    return {
      errorMessage: null,
      searching: "",
      method: {
        criteria: "",
        search: "",
      },
      keyPress: false,
      slicer: {
        firstIndex: 0,
        lastIndex: 10,
        currentPage: 0,
        resultsOnPage: 10,
      }
    };
  },
    async updated() {
      if (this.keyPress) {
      // default value for the slicer to come back on the first page during the search
        this.slicer.currentPage = 0;
        this.slicer.firstIndex = 0;
        this.slicer.lastIndex = 10;
        this.slicer.resultsOnPage = 10;
      // catch the search for the http request
        this.method.search = this.searching;
        await this.$store.dispatch("getRegistrationsByFilter", this.method);
        this.keyPress = false;
      }
    },
  // Fill up the slicer with default value
  methods: {
    search() {
      this.keyPress = true;
    },
    updateCriteriaSearch(newCriteria) {
      this.method.criteria = newCriteria + "=";
      this.searching = "";

      // reinitialize the page with default value
      this.slicer.currentPage = 0;
      this.slicer.firstIndex = 0;
      this.slicer.lastIndex = 10;
      this.slicer.resultsOnPage = 10;
      this.allRegistrations;
    },
    // catch the new slicer from the chil
    newData(data){
      this.slicer = data;
      this.allRegistrations;
    },
  },
  computed: {
    allRegistrations(){
      let registrations = this.$store.getters.getRegistrationsByFilter;
      return registrations;
      },
    registrationsToDisplay() {
      return this.allRegistrations.slice(this.slicer.firstIndex, this.slicer.lastIndex)
      },
    total(){
      console.log('total', this.allRegistrations.length)
      return this.allRegistrations.length;
    }
  }
};
</script>
