<template>
  <div>
    <ProductsMobile />
    <ProductsDesktop />
  </div>
</template>

<script>
import ProductsMobile from "@/components/Home/Products/ProductsMobile";
import ProductsDesktop from "@/components/Home/Products/ProductsDesktop";
export default {
  name: "Products",
  components: { ProductsDesktop, ProductsMobile },
  mounted() {
    this.initSlickProducts();
  },
  methods: {
    initSlickProducts: function() {
      let slick_index = this.slick_index;
      let cardBodyShow = this.cardBodyShow;

      slick_index();

      this.$nextTick(function() {
        if (window.matchMedia("screen and (max-width: 576px)").matches) {
          cardBodyShow();
          $(".center").on("swipe", function(event, slick, direction) {
            cardBodyShow();
          });
        }
        if (window.matchMedia("screen and (min-width: 768px)").matches) {
          $(".card-body").css("display", "block");
          $(".center").on("swipe", function(event, slick, direction) {
            $(".card-body").css("display", "block");
          });
        }
      });
    },
    cardBodyShow: function() {
      // 모바일로 접근시에 CardBodyShow 작동
      $(".card-body").css("display", "none");
      var cardMent = $(".card")
        .filter(".slick-active")
        .children()
        .children();
      cardMent = cardMent[1];
      $(cardMent).css("display", "block");
    },
    slick_index: function() {
      $(function() {
        $(".center")
          .not(".slick-initialized")
          .slick({
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
          });
      });
    }
  }
};
</script>

<style scoped></style>
