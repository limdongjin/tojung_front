<template>
  <div class="tab-content" id="myTabContent">
    <ProductDescription />
    <ProductTimelines />
  </div>
</template>

<script>
import ProductDescription from "@/components/Product/Content/Description/ProductDescription";
import ProductTimelines from "@/components/Product/Content/ProductTimelines";

export default {
  name: "ProductContent",
  // props: ["product"],
  components: { ProductTimelines, ProductDescription },
  computed: {
    product() {
      return this.$store.getters.product;
    }
  }
};
</script>
