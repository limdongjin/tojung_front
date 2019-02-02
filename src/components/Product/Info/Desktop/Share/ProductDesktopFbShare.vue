<template>
  <li class="d-block">
    <a :href="fbShareLink">
      <progressive-img :src="fbSvg" class="sns-icon d-block mx-auto mb-3">
      </progressive-img>
    </a>
  </li>
</template>
<script>
export default {
  name: "ProductDesktopFbShare",
  props: ["link"],
  computed: {
    fbSvg: function() {
      return require("@/assets/fb.svg");
    },
    fbShareLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=https://tojung.me${
        this.$route.query.page
      }&amp;src=sdkpreparse`;
    }
  }
};
</script>
