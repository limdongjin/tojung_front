<template>
  <div class="scrolling-wrapper center visible-xs" id="all">
    <div class="card border-0 mb-md-3 mx-md-1" v-for="product in products">
      <ProductSummary :product="product" />
    </div>
  </div>
  <!--</slick>-->
</template>

<script>
import ProductSummary from "@/components/Home/Products/ProductSummary";
export default {
  name: "ProductsMobile",
  components: { ProductSummary },
  computed: {
    products: function() {
      return this.$store.getters.products;
    }
  },
  updated() {
    // this.slick_index();
  },
  mounted() {
    // this.slick_index();
  },
  methods: {
    productLink(product) {
      return `/product/${product.id}`;
    },
    productFundedMoney(product) {
      return product.funded_money.toLocaleString();
    }
  }
};
</script>
