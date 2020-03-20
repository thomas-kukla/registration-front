<template>
    <ul class="d-flex flex-row justify-content-center mt-5">
      <span @click="updateP(currentPage - 1)" class="page-item"><a class="page-link"></a></span>
      <span class="page-link ml-3 mr-3">{{ currentPage + 1 }} of {{ totalPages() }}</span>
      <span @click="updateP(currentPage + 1)" class="page-item"><a class="page-link"></a></span>
    </ul>
</template>

<script>
export default {
  props: ['processes', 'currentPage', 'pageSize'],
  methods: {
    updateP(pageNumber) {
      console.log("processes", this.processes, "pageNumber", pageNumber, "currentPage", this.currentPage, "size page", this.pageSize)
      this.$emit('newPages', pageNumber);
    },
    totalPages(){
      return Math.ceil(this.processes.length / this.pageSize)
    },
    // showPreviousLink(){
    //   return this.currentPage == 0 ? false : true;
    // },
    // showNextLink(){
    //   return this.currentPage == (this.totalPages() - 1) ? false : true;
    // }
  }
}
</script>

