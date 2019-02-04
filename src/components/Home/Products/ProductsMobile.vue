<template>
  <slick
    ref="slick"
    :options="slickOptions"
    class="scrolling-wrapper center visible-xs"
    id="all"
  >
    <div class="card border-0 mb-md-3 mx-md-1" v-for="product in products">
      <ProductSummary :product="product" />
    </div>
  </slick>
</template>

<script>
import ProductSummary from "@/components/Home/Products/ProductSummary";
import Slick from "vue-slick";

export default {
  name: "ProductsMobile",
  components: { ProductSummary, Slick },
  data() {
    return {
      slickOptions: {
        arrows: false,
        centerPadding: "10px",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        touchMove: true,
        draggable: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
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
  computed: {
    products: function() {
      return this.$store.getters.products;
    }
  }
};
</script>
