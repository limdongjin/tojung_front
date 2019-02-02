<template>
  <progressive-img
    :src="product.image0"
    :placeholder="product.image0"
    :blur="30"
    class="pro-img visible-xs"
  >
  </progressive-img>
</template>

<script>
export default {
  name: "ProductMobileImg",
  props: ["product"]
};
</script>

<style scoped></style>
