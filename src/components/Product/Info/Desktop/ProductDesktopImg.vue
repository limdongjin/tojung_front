<template>
  <progressive-img :src="image" :placeholder="image" class="pro-img visible-lg">
  </progressive-img>
</template>

<script>
export default {
  name: "ProductDesktopImg",
  props: ["image"]
};
</script>

<style scoped></style>
