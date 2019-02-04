<template>
  <div :class="classes">
    <span class="funding-money"> {{ fundingMoney }}원 </span>
    <span class="font-red"> {{ fundingCount }} 명 </span>
    <span>{{ description }}</span>
  </div>
</template>
<script>
export default {
  name: "ProductFunding",
  props: ["classes", "description"],
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    fundingMoney: function() {
      if(!this.product.funded_money) return
      return this.product.funded_money.toLocaleString();
    },
    fundingCount: function() {
      return this.product.funded_count;
    }
  }
};
</script>
