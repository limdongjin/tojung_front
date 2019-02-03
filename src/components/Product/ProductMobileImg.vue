<template>
  <img v-lazy="imageUrl" class="pro-img visible-xs lazy-blur" />
</template>

<script>
export default {
  name: "ProductMobileImg",
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    imageUrl: function() {
      console.log("후,,,");
      if (!this.$store.getters.product.image0) {
        return;
      }
      return this.$store.getters.product.image0.url;
    }
  }
};
</script>
<style scoped></style>
