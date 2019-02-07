<template>
  <div :class="divClass">
    <a href="/home/brand">
      <video
        playsinline
        autoplay
        loop
        muted
        class="d-block cover_img"
        ref="carovideo"
        src=""
      >
        <!--<source :src="resource" type="video/mp4" />-->
      </video>
      <pre :class="textClasses" v-html="description"></pre>
    </a>
  </div>
</template>
<script>
export default {
  name: "CarouselItem",
  props: ["resource", "description", "active", "text-class", "preload"],
  mounted() {
    var video = this.$refs.carovideo;

    video.src = this.resource;
    video.volume = 0;
    video.pause();

    setTimeout(function() {
      video.play();
    }, 150);
  },
  computed: {
    divClass() {
      if (this.active === "true") {
        return "carousel-item active";
      } else {
        return "carousel-item";
      }
    },
    textClasses() {
      return "cover_text " + this.textClass;
    }
  }
};
</script>
