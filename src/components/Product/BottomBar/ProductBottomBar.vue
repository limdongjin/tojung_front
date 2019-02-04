<template>
  <div>
    <!-- Bottom bar -->
    <div class="overlay2"></div>
    <nav
      class="navbar bottom-bar py-2 fixed-bottom align-items-center text-center visible-xs-flex"
    >
      <ProductMobileSubmit />

      <ProductMobileLike />

      <ProductMobileShareOpenButton />
    </nav>
    <PackageBar />
    <ProductMobileShareBar />
  </div>
</template>

<script>
import ProductMobileLike from "@/components/Product/BottomBar/ProductMobileLike";
import ProductMobileSubmit from "@/components/Product/BottomBar/ProductMobileSubmit";
import ProductMobileShareOpenButton from "@/components/Product/BottomBar/ProductMobileShareOpenButton";
import PackageBar from "@/components/Product/BottomBar/PackageBar";
import ProductMobileShareBar from "@/components/Product/BottomBar/ProductMobileShareBar";

export default {
  name: "ProductBottomBar",
  // props: ["product"],
  components: {
    ProductMobileShareBar,
    PackageBar,
    ProductMobileShareOpenButton,
    ProductMobileSubmit,
    ProductMobileLike
  },
  computed: {
    isLike: function() {
      return this.product.isLike;
    },
    product: function() {
      return this.$store.getters.product;
    }
  },
  mounted: function() {
    this.unwrapBottomBar();
    // $(".package-row")
    //   .not(".slick-initialized")
    //   .slick({
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 8,
    //     slidesToScroll: 1,
    //     focusOnSelect: true,
    //     arrows: false,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           slidesToShow: 5
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           slidesToShow: 4
    //         }
    //       },
    //       {
    //         breakpoint: 330,
    //         settings: {
    //           arrows: false,
    //           slidesToShow: 3
    //         }
    //       }
    //     ]
    //   });

    // $(".package-img").click(function() {
    //   if ($(this).hasClass("border-red")) {
    //     $(this).removeClass("border-red");
    //   } else {
    //     for (let i = 0; i < $(".package-img").length; i++) {
    //       $(".package-img").removeClass("border-red");
    //     }
    //     $(this).addClass("border-red");
    //   }
    //   var pid = $(".border-red")[0].id;
    //   var url = window.location.href;
    //   var product_id = url.substr(url.indexOf("product/") + 8);
    //   $(".pay-link").attr(
    //     "href",
    //     "/product_order/new?product_id=" + product_id + "&package_id=" + pid
    //   );
    //
    //   // 패키지 버튼 깜빡깜빡
    //   var count = 0;
    //   var refresh = setInterval(function() {
    //     ++count;
    //     this.doBlink();
    //     if (count >= 4) {
    //       clearInterval(refresh);
    //     }
    //   }, 300);
    // });
  },
  methods: {
    unwrapBottomBar: function() {
      $(".bottom-bar").unwrap();
      $(".overlay2").unwrap();
    },
    doBlink: function() {
      $(".pay-link").toggleClass("hidden0");
    }
  }
};
</script>
