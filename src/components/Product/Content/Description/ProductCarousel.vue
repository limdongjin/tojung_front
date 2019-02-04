<template>
  <div class="caro-cards mb-4">
    <slick ref="slick" :options="slickOptions">
      <div class="caro-card" v-for="image of images">
        <img :src="image.image.url" alt="" class="w-100 cardnews-img" />
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "ProductCarousel",
  components: { Slick },
  computed: {
    images: function() {
      return this.$store.getters.product.product_caro_images;
    }
  },
  mounted() {
    // remove unused slide dot
    setTimeout(() => {
      if (
        $("#slick-slide-control30").length === 1 &&
        $("#slick-slide-control31").length == 0
      ) {
        $("#slick-slide-control30")[0].parentElement.outerHTML = "";
      }
    }, 500);
  },
  beforeMount() {
    console.log("mount!");
  },
  beforeUpdate() {
    if (this.$refs.slick) {
      this.$refs.slick.destroy();
    }
  },
  updated() {
    this.$nextTick(function() {
      if (this.$refs.slick) {
        this.$refs.slick.create(this.slickOptions);
      }
    });
  },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        arrows: false,
        dots: true,
        dotsClass: "d-flex cards-dot justify-content-center pl-0",
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: "linear"
      }
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    }
  }
};
</script>

<style scoped></style>
