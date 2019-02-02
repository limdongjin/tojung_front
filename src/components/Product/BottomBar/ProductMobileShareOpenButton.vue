<template>
  <button
    class="button-none buy-button text-white"
    id="shareBarCollapse"
    onclick="sharebar_click();"
  >
    <img :src="linkSvg" />
  </button>
</template>
<script>
export default {
  name: "ProductMobileShareOpenButton",
  computed: {
    linkSvg: function() {
      return require("@/assets/link.svg");
    }
  }
};
</script>
