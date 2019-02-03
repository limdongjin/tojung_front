<template>
  <div>
    <img v-lazy="image" class="pro-img visible-lg lazy-blur" />
  </div>
</template>

<script>
export default {
  name: "ProductDesktopImg",
  props: ["image"]
};
</script>

<style scoped></style>
