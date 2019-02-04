<template>
  <div class="wrapper">
    <img :src="product_option.image1.url" class="w-100" />
  </div>
</template>

<script>
export default {
  name: "ProductOption",
  beforeCreate() {
    console.log("bef");
    this.$store.dispatch("SET_PRODUCT_OPTION", this.$route.path);
  },
  computed: {
    product_option() {
      console.log(this.$store.getters.product_option);
      return this.$store.getters.product_option;
    },
    imageUrl() {}
  }
};
</script>

<style scoped></style>
