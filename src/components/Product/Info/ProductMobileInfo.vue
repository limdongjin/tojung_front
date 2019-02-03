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
      :description="fundingDescription"
      classes="d-flex font-16 font-weight-bold justify-content-between"
    />
  </div>
</template>
<script>
import ProductFunding from "@/components/Product/Info/ProductFunding";

export default {
  name: "ProductMobileInfo",
  components: { ProductFunding },
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    fundingDescription: function() {
      if (this.product.isEnd) return "상시펀딩중";
      else return "광고펀딩중";
    }
  }
};
</script>
