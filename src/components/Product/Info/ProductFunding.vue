<template>
  <div :class="classes">
    <!--{{ fundingMoney }}-->
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
    fundingMoney: function () {
      return this.$store.getters.product.funded_money
    },
    fundingCount: function () {
      return this.$store.getters.product.funded_count
    }
  }
};
</script>
