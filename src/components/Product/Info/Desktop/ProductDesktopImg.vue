<template>
  <div>
    <img :src="imageUrl" class="pro-img visible-lg" />
  </div>
</template>

<script>
export default {
  name: "ProductDesktopImg",
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    imageUrl: function() {
      if (!this.$store.getters.product.image0) return;
      return this.$store.getters.product.image0.url;
    }
  }
};
</script>

<style scoped></style>
