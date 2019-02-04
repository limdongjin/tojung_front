<template>
  <div>
    <div class="wrapper">
      <ProductInfo />
      <ProductNav />
      <ProductContent />
    </div>
    <ProductBottomBar />
  </div>
</template>

<script>
import ProductNav from "@/components/Product/ProductNav";
import ProductContent from "@/components/Product/Content/ProductContent";
import ProductBottomBar from "@/components/Product/BottomBar/ProductBottomBar";
import ProductInfo from "@/components/Product/Info/ProductInfo";

export default {
  name: "Product",
  components: {
    ProductInfo,
    ProductBottomBar,
    ProductContent,
    ProductNav
  },
  computed: {
    product: function() {
      return this.$store.getters.product;
    }
  },
  beforeCreate() {
    this.$store.dispatch("SET_PRODUCT", this.$route.path);
  },
  mounted() {
    // $(function() {
    //   $(".caro-cards")
    //     .not(".slick-initialized")
    //     .slick({
    //       arrows: false,
    //       dots: true,
    //       dotsClass: "d-flex cards-dot justify-content-center pl-0",
    //       infinite: true,
    //       speed: 300,
    //       fade: true,
    //       cssEase: "linear"
    //     });
    // });
    // this.$nextTick(function() {
    //   if (window.matchMedia("screen and (max-width: 576px)").matches) {
    //     cardBodyShow();
    //     $(".center").on("swipe", function(event, slick, direction) {
    //       cardBodyShow();
    //     });
    //   }
    //   if (window.matchMedia("screen and (min-width: 768px)").matches) {
    //     $(".card-body").css("display", "block");
    //     $(".center").on("swipe", function(event, slick, direction) {
    //       $(".card-body").css("display", "block");
    //     });
    //   }
    // });
  }
};
</script>
