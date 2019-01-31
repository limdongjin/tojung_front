<template>
  <div class="container">
    <div class="row">
      <div
        class="card result-card col-12 col-md-6 col-lg-4"
        v-for="product in productsResult"
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
  props: {
    productsResult: {}
  }
};
</script>
