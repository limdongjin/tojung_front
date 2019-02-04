<template>
  <div class="container visible-lg card-desktop">
    <div class="row justify-content-between thumb-row">
      <div class="card border-0 mb-md-3 mx-md-1" v-for="product in products">
        <ProductSummary :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductSummary from "@/components/Home/Products/ProductSummary.vue";

export default {
  name: "ProductsDesktop",
  components: { ProductSummary },
  computed: {
    products: function() {
      return this.$store.getters.products;
    }
  }
};
</script>
