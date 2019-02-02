<template>
  <div>
    <!-- Bottom bar -->
    <div class="overlay2"></div>
    <nav
      class="navbar bottom-bar py-2 fixed-bottom align-items-center text-center visible-xs-flex"
    >
      <ProductMobileSubmit />

      <ProductMobileLike :product="product" :isLike="isLike" />

      <!-- <a href="/" class="d-block ml-5 text-white">
          <%=image_tag(@cdn_url+"heart.svg")%>
        </a> -->
      <ProductMobileShareOpenButton />
    </nav>
    <PackageBar :packages="product.packages" />
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
  props: ["product"],
  components: {
    ProductMobileShareBar,
    PackageBar,
    ProductMobileShareOpenButton,
    ProductMobileSubmit,
    ProductMobileLike
  },
  computed: {
    isLike: function() {
      // 구현중 !!
      return false;
    }
  },
  mounted: function() {
    this.unwrapBottomBar();
    $(".package-row")
      .not(".slick-initialized")
      .slick({
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 5
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 4
            }
          },
          {
            breakpoint: 330,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          }
        ]
      });

    $(".package-img").click(function() {
      if ($(this).hasClass("border-red")) {
        $(this).removeClass("border-red");
      } else {
        for (let i = 0; i < $(".package-img").length; i++) {
          $(".package-img").removeClass("border-red");
        }
        $(this).addClass("border-red");
      }
      var pid = $(".border-red")[0].id;
      var url = window.location.href;
      var product_id = url.substr(url.indexOf("product/") + 8);
      $(".pay-link").attr(
        "href",
        "/product_order/new?product_id=" + product_id + "&package_id=" + pid
      );

      // 패키지 버튼 깜빡깜빡
      var count = 0;
      var refresh = setInterval(function() {
        ++count;
        doBlink();
        if (count >= 4) {
          clearInterval(refresh);
        }
      }, 300);
    });

    // _package
    for (var i = 0; i < $(".product-money").length; i++) {
      var money2 = $(".product-money")[i];
      var money = $(money2).html();
      if (money !== "0원") {
        money = money.substring(0, money.length - 1);
        money = Number(money);
        money = money.toLocaleString();
        if (money != NaN) {
          money = money + "원";
          $(money2).html(money);
        }
      }
    }

    // _share
    try {
      Kakao.init("d88e4ac3d481a3491b72e73fcb0ae1fc");
    } catch (e) {
      console.log("kakao init ok");
    }
  },
  methods: {
    unwrapBottomBar: function() {
      $(".bottom-bar").unwrap();
      $(".overlay2").unwrap();
    }
  }
};
</script>
