<template>
  <a
    class="d-block buy-button pay-link font-14 ml-4 text-white"
    id="packageBarCollapse"
    v-on:click="packagebar_click"
  >
    내 인생으로 배송받기
  </a>
</template>
<script>
export default {
  name: "ProductMobileSubmit",
  methods: {
    packagebar_click: function() {
      $(".overlay2").on("click", function() {
        // hide sidebar
        $("#packageBar").removeClass("open");
        $("#packageBarCollapse").removeClass("font-weight-bold");
        $(".pay-link").removeAttr("href");
        // hide overlay
        $(".overlay2").removeClass("active");
      });
      // open sidebar
      $("#packageBar").addClass("open");
      $("#packageBarCollapse").addClass("font-weight-bold");
      // fade in the overlay
      $(".overlay2").addClass("active");
      $(".collapse.in").toggleClass("in");
      $("a[aria-expanded=true]").attr("aria-expanded", "false");
    }
  }
};
</script>
