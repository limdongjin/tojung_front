<template>
  <div class="scrolling-wrapper center visible-xs" id="all">
    <div class="card border-0 mb-md-3 mx-md-1" v-for="product in products">
      <ProductSummary :product="product"  />
    </div>
  </div>
</template>

<script>
import ProductSummary from "@/components/Home/Products/ProductSummary.vue";

export default {
  name: "ProductsMobile",
  // props: ["products"],
  components: { ProductSummary },
  computed: {
    products: function () {
      return this.$store.getters.products
    }
  },
  mounted: function(){
    this.slick_index();
  },
  methods: {
    slick_index: function () {
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

    // data: function() {
    //   return {
    //     // productss: this.products
    //     // products: [
    //     //   {
    //     //     id: 1,
    //     //     title: "제품 1",
    //     //     subname: "서브 1",
    //     //     image0:
    //     //       "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
    //     //     funded_count: 112,
    //     //     funded_money: 12111,
    //     //     funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
    //     //   },
    //     //   {
    //     //     id: 2,
    //     //     title: "제품 2",
    //     //     subname: "서브 2",
    //     //     image0:
    //     //       "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
    //     //     funded_count: 231,
    //     //     funded_money: 123113,
    //     //     funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
    //     //   },
    //     //   {
    //     //     id: 2,
    //     //     title: "제품 2",
    //     //     subname: "서브 2",
    //     //     image0:
    //     //       "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
    //     //     funded_count: 231,
    //     //     funded_money: 123113,
    //     //     funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
    //     //   }
    //     // ]
    //   };
    // }
  }
};
</script>
