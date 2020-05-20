<template>
  <div class="registration">
    <div>
       <criteria @methods="updateCriteriaSearch" />
      <input
        @keydown="search()"
        v-model="searching"
        placeholder="Filter"
        class="mt-3 ml-2 w-25 form-control"
      />
    </div>
    <pagination 
    :dataToDisplay="allProcesses" 
    @newDataToDisplay="newData($event)"
    />

    <processes-list :processes="processesToDisplay" />
  </div>
</template>

<script>
import Criteria from "@/components/TheCriteriasSelector.vue";
import ProcessesList from "@/components/ProcessesList.vue";
import Pagination from "@/components/ThePagination.vue";

export default {
  components: {
    Criteria,
    ProcessesList,
    Pagination,
  },
  data() {
    return {
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
      await this.$store.dispatch("getProcessesByFilter", this.method);
      this.keyPress = false;
    }
  },
  // Fill up the slicer with default value
  beforeMount(){
    console.log('processes 1')
    this.slicer.firstIndex = 0;
    this.slicer.lastIndex = 10;
  },
  methods: {
    updateCriteriaSearch(newCriteria) {
      this.method.criteria = newCriteria + "=";
      this.searching = "";
      this.processesToDIsplay;
    },
    search() {
      this.keyPress = true;
    },
    newData(data){
      console.log('Processes / newData / data', data)
      this.slicer = data;
      this.processesToDisplay;
    }
  },
  computed: {
    processesToDisplay() {
      return this.$store.getters.getProcessesByFilter(this.slicer)
      },
    allProcesses(){
      return this.$store.getters.getAllProcesses;
    }
  }
};
</script>
