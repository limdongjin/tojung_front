<template>
  <div class="tab-content" id="myTabContent">
    <ProductDescription :product="product" />
    <ProductTimelines
      :timelines="product.product_timelines"
      :maker_responses="product.maker_responses"
    />
  </div>
</template>

<script>
import ProductDescription from "@/components/Product/Content/Description/ProductDescription";
import ProductTimelines from "@/components/Product/Content/ProductTimelines";

export default {
  name: "ProductContent",
  props: ["product"],
  components: { ProductTimelines, ProductDescription }
};
</script>
