<template>
  <div class="caro-cards mb-4">
    <!--{{ // carouselImages }}-->
    <div class="caro-card" v-for="image of carouselImages">
      <img :src="image.image.url" class="w-100 cardnews-img" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCarousel",
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    carouselImages: function() {
      return this.product.product_caro_images;
    }
  },
  mounted: function() {}
};
</script>
