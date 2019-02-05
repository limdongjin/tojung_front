<template>
  <div class="container">
    <div class="row">
      <div
        class="card result-card col-12 col-md-6 col-lg-4"
        v-for="product in results"
      >
        <ProductSummaryForSearch :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductSummaryForSearch from "@/components/Search/ProductSummaryForSearch";

export default {
  name: "ResultsView",
  components: { ProductSummaryForSearch },
  model: {
    prop: 'results'
  },
  props: ['results']
  // data() {
  //   return {
  //     productsSearchResult: []
  //   };
  // }
};
</script>
