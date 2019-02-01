<template>
  <div class="caro-cards mb-4">
    <div class="caro-card" v-for="image in carouselImages">
      <img
        :src="image.url"
        class="w-100 cardnews-img"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCarousel",
  props: ["carouselImages"],
  mounted: function () {
    $('.caro-cards').slick({
      arrows: false,
      dots: true,
      dotsClass: 'd-flex cards-dot justify-content-center pl-0',
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear'
    });
  }
};
</script>
