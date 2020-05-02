<template>
  <div class="mt-3">
    <div class="d-flex justify-content-center">
      <span class="page-link"><a class="page-link">First</a></span>
        <ul class="d-flex flex-row justify-content-center list-unstyled pagination">
          <li
            v-if="showPreviousLink()"
            @click="updatePages(currentPage - 1)"
            class="page-item"
          >
            <a class="page-link"></a>
          </li>
          <li v-if="totalPages()" class="page-link ml-3 mr-3">
            {{ currentPage + 1 }} of {{ totalPages() }}
          </li>
          <li
            v-if="showNextLink()"
            @click="updatePages(currentPage + 1)"
            class="page-item"
          >
            <a class="page-link"></a>
          </li>
        </ul>
      <a class="page-link ml-3 mr-3">Last</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pagesToDisplay: {
      type: Array,
      default: null,
    },
    currentPage: {
      type: Number,
      default: null,
    },
    numberOfResults: {
      type: Number,
      default: null,
    },
  },
  methods: {
    updatePages(pageNumber) {
      this.$emit("update", pageNumber);
    },
    totalPages() {
      let total = Math.ceil(this.pagesToDisplay.length / this.numberOfResults);
      if (total === 0) {
        this.showPreviousLink = 0;
        this.showNextLink = 0;
        return false;
      } else {
        return total;
      }
    },
    showPreviousLink() {
      return this.currentPage === 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage === this.totalPages() - 1 ? false : true;
    },
  },
};
</script>
