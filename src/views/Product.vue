<template>
  <div>
    <div class="wrapper">
      <ProductInfo />
      <ProductNav />
      <ProductContent />
    </div>
    <ProductBottomBar />
  </div>
</template>

<script>
import ProductNav from "@/components/Product/ProductNav";
import ProductContent from "@/components/Product/Content/ProductContent";
import ProductBottomBar from "@/components/Product/BottomBar/ProductBottomBar";
import ProductInfo from "@/components/Product/Info/ProductInfo";

export default {
  name: "Product",
  components: {
    ProductInfo,
    ProductBottomBar,
    ProductContent,
    ProductNav
  },
  computed: {
    product: function() {
      return this.$store.getters.product;
    }
  },
  beforeCreate() {
    this.$store.dispatch("SET_PRODUCT", this.$route.path);
  }
};
</script>
