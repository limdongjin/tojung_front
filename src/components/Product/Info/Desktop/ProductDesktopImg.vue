<template>
  <div>
    <img v-lazy="imageUrl" class="pro-img visible-lg lazy-blur" />
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
