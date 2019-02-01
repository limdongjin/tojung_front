<template>
  <div class="tab-content" id="myTabContent">
    <!--<%=render 'description', collection: @product, cached: true %>-->
    <ProductDescription :product="product" />
    <ProductTimelines
      :timelines="product.product_timelines"
      :maker_responses="product.maker_responses"
    />
  </div>
</template>

<script>
import ProductDescription from "@/components/Product/ProductDescription";
import ProductTimelines from "@/components/Product/ProductTimelines";

export default {
  name: "ProductContent",
  props: ["product"],
  components: { ProductTimelines, ProductDescription }
};
</script>
