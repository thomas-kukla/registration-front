<template>
  <div>
    <div>
      <ul class="d-flex flex-row justify-content-center">
        <span v-if="showPreviousLink()" @click="updatePages(currentPage - 1)" class="page-item"><a class="page-link"></a></span>
        <span class="page-link ml-3 mr-3">{{ currentPage + 1 }} of {{ totalPages() }}</span>
        <span v-if="showNextLink()" @click="updatePages(currentPage + 1)" class="page-item"><a class="page-link"></a></span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pagesToDisplay', 'currentPage', 'pageSize'],
  methods: {
    updatePages(pageNumber) {
      this.$emit('update', pageNumber);
    },
    totalPages(){
      return Math.ceil(this.pagesToDisplay.length / this.pageSize)
    },
    showPreviousLink(){
      return this.currentPage == 0 ? false : true;
    },
    showNextLink(){
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    }
  }
}
</script>

