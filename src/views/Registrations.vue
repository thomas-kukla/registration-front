<template>
  <div class="registration">
    <div>
      <Criteria @methods="updateCriteriaSearch" />
      <input
        @keydown="search()"
        v-model="searching"
        placeholder="Filter"
        class="mt-2 ml-2 w-25 form-control"
      />
    </div>
    <pagination 
      :dataToDisplay="allRegistrations" 
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
      resultsOnPage: 10,
      slicer: {
        firstIndex: null,
        lastIndex: null,
      }
    };
  },
    async updated() {
      if (this.keyPress) {
        this.method.search = this.searching;
        await this.$store.dispatch("getRegistrationsByFilter", this.method);
        this.keyPress = false;
      }
    },
  // Fill up the slicer with default value
  beforeMount(){
    this.firstIndex = 10;
    this.lastIndex = 10;
  },
  methods: {
    updateCriteriaSearch(newCriteria) {
      this.method.criteria = newCriteria + "=";
      this.searching = "";
      this.registrationsToDisplay;
      this.slicer.firstIndex = 0;
      this.slicer.lastIndex = 10;

    },
    search() {
      this.keyPress = true;
    },
    newData(data){
      this.slicer = data;
      this.registrations;
    },
  },
  computed: {
    registrationsToDisplay() {
      return this.$store.getters.getRegistrationsByFilter(this.slicer)
      },
    allRegistrations(){
      return this.$store.getters.getAllRegistrations;
    },
  }
};
</script>
