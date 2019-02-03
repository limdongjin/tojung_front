<template>
  <button
    class="button-none buy-button text-white"
    id="shareBarCollapse"
    v-on:click="sharebar_click"
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
  },
  methods: {
    sharebar_click: function() {
      $(".overlay2").on("click", function() {
        // hide sidebar
        $("#shareBar").removeClass("open");
        // hide overlay
        $(".overlay2").removeClass("active");
      });
      // open sidebar
      $("#shareBar").addClass("open");
      // fade in the overlay
      $(".overlay2").addClass("active");
      $(".collapse.in").toggleClass("in");
      $("a[aria-expanded=true]").attr("aria-expanded", "false");
    }
  }
};
</script>
