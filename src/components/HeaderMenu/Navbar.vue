<template>
  <nav class="navbar navbar-light height-inherit">
    <h4 class="brand">
      <a class="navbar-brand" href="/">
        <!--<%=image_tag("logo.png", class: "logo")%>-->
        <img src="/img/logo.png" alt="투정 로고" class="logo" />
      </a>
    </h4>
    <div class="nav-right">
      <a class="navbar-brand mr-1" href="/home/search">
        <img
          src="https://d1eq7v76s8dt2n.cloudfront.net/search.png"
          alt="bars"
          class="icon_search"
        />
      </a>
      <button
        class="button-none bg-base pr-0"
        type="button"
        id="sidebarCollapse"
        v-on:click="sidebar_click"
      >
        <img
          src="https://d1eq7v76s8dt2n.cloudfront.net/bars.svg"
          class="icon_bars bg-base"
        />
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    toHome: function(){
      this.$router.push("/")
    },
    sidebar_click: function() {
      $("#dismiss, #dismiss-button, .overlay, #exit-button").on(
        "click",
        function() {
          $("#sidebar").css("margin-right", "-300px");
          // hide overlay
          $(".overlay").removeClass("active");
        }
      );

      // open sidebar
      $("#sidebar").css("margin-right", "0px");
      // fade in the overlay
      $(".overlay").addClass("active");
      $(".collapse.in").toggleClass("in");
      $("a[aria-expanded=true]").attr("aria-expanded", "false");
    }
  }
};
</script>
<style></style>
