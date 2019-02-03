<template>
  <a :href="fbShareLink">
    <img :src="fbSvg" :class="classes" />
  </a>
</template>
<script>
export default {
  name: "FbShare",
  props: ["webUrl", "classes"],
  computed: {
    fbSvg: function() {
      return require("@/assets/fb.svg");
    },
    fbShareLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=${
        this.webUrl
      }&amp;src=sdkpreparse`;
    }
  }
};
</script>
