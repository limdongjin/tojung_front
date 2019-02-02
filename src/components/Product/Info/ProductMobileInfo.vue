<template>
  <div class="pro-info-xs visible-xs">
    <h4 class="font-18 font-weight-bold">
      {{ product.name }}
    </h4>
    <p class="font-14">
      {{ product.subname }}
    </p>
    <ProductFunding
      :money="product.funded_money"
      :count="product.funded_count"
      description="dssdfs"
      classes="d-flex font-16 font-weight-bold justify-content-between"
    />
  </div>
</template>
<script>
import ProductFunding from "@/components/Product/Info/ProductFunding";
export default {
  name: "ProductMobileInfo",
  components: { ProductFunding },
  props: ["product"],
  computed: {
    isEnd: function() {
      return this.product.isEnd;
    }
  }
};
</script>
