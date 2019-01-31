<template>
  <div>
    <Carousel />
    <div class="wrapper mt-0 loaded">
      <Categories />
      <CategoryTag />
      <ProductsMobile />
      <ProductsDesktop />
      <MdContents />
      <BottomBar />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Home/Carousel/Carousel.vue";
import Categories from "@/components/Home/Categories.vue";
import ProductsDesktop from "@/components/Home/Products/ProductsDesktop";
import ProductsMobile from "@/components/Home/Products/ProductsMobile";
import BottomBar from "@/components/Home/BottomBar";
import MdContents from "@/components/Home/MdContents";
import CategoryTag from "@/components/Home/CategoryTag"; // @ is an alias to /src

export default {
  components: {
    CategoryTag,
    MdContents,
    BottomBar,
    ProductsMobile,
    ProductsDesktop,
    Categories,
    Carousel
  },
  // created: function() {
  //   this.initHomeIndex();
  // },
  mounted: function() {
    this.initHomeIndex();
  },
  methods: {
    initHomeIndex: function() {
      let slick_index = this.slick_index;
      let cardBodyShow = this.cardBodyShow;
      let markCommas = this.markCommas;
      // alert("init");
      markCommas();
      slick_index();
      if (window.matchMedia("screen and (max-width: 576px)").matches) {
        cardBodyShow();
        $(".center").on("swipe", function(event, slick, direction) {
          cardBodyShow();
        });
      }
      // window 사이즈가 줄어들었을 때 CardBodyShow 작동
      document.addEventListener("resize", function() {
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
      // alert("bo");
      // 모바일로 접근시에 CardBodyShow 작동
      $(".card-body").css("display", "none");
      var cardMent = $(".card")
        .filter(".slick-active")
        .children()
        .children();
      cardMent = cardMent[1];
      $(cardMent).css("display", "block");
    },
    markCommas: function() {
      // alert("co");
      var funding_money = $(".funding-money");
      var money;
      var putMoney;

      for (let i = 0; i < funding_money.length; i++) {
        putMoney = funding_money[i];
        money = funding_money[i];
        money = $(money).html();

        if (money === "0원") {
          continue;
        }

        money = money.replace("원", "");
        money = money.split(",").join("");

        money = money.substring(0, money.length);
        money = Number(money);
        money = money.toLocaleString();
        money = money + "원";
        $(putMoney).html(money);
      }
    },
    slick_index: function() {
      // alert("sl");
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
    }
  }
};
</script>
