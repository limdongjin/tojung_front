<template>
  <section class="package my-5 mx-4">
    <h4 class="font-18 font-weight-bold mb-4">PACKAGE 정리</h4>
    <img v-lazy="image1Url" class="d-block package-set lazy-blur" />
  </section>
</template>
<script>
export default {
  name: "PackageSummaryImage",
  computed: {
    image1Url() {
      if (!this.$store.getters.product.image1) return;
      return this.$store.getters.product.image1.url;
    }
  }
};
</script>
