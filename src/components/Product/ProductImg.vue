<template>
  <progressive-img
    :src="product.image"
    :placeholder="product.image"
    :blur="30"
    class="pro-img visible-xs"
  >
  </progressive-img>
</template>

<script>
export default {
  name: "ProductImg",
  props: ["product"]
};
</script>

<style scoped></style>
