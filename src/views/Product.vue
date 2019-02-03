<template>
  <div>
    <!--<h1> {{ // $store.state.product }} </h1>-->
    <div class="wrapper">
      <ProductMobileImg />
      <ProductMobileInfo />
      <ProductDesktopInfo />
      <ProductNav />
      <ProductContent />
    </div>
    <ProductBottomBar />
  </div>
</template>

<script>
import ProductMobileImg from "@/components/Product/ProductMobileImg";
import ProductNav from "@/components/Product/ProductNav";
import ProductContent from "@/components/Product/Content/ProductContent";
import ProductMobileInfo from "@/components/Product/Info/ProductMobileInfo";
import ProductDesktopInfo from "@/components/Product/Info/Desktop/ProductDesktopInfo";
import ProductBottomBar from "@/components/Product/BottomBar/ProductBottomBar";

export default {
  name: "Product",
  components: {
    ProductBottomBar,
    ProductDesktopInfo,
    ProductMobileInfo,
    ProductContent,
    ProductNav,
    ProductMobileImg
  },
  computed: {
    product: function() {
      return this.$store.getters.product;
    }
  },
  beforeCreate: function() {
    this.$store.dispatch("SET_PRODUCT", this.$route.path);
  },
  mounted: function() {
    // alert("d!");
    this.markCommas(".product-money");
    // alert("fundein am;");
    this.markCommasf()
    // console.log("ss!!");
    // this.markCommas(".funding-money");
  },
  methods: {
    markCommasf: function() {
      var funding_money = $(".funding-money");
      var money;
      var putMoney;

      for (let i = 0; i < funding_money.length; i++) {
        putMoney = funding_money[i];
        money = funding_money[i];
        money = $(money).html();
        if(money.includes(',')) continue
        if (money === "0원") continue;

        money = money.replace("원", "");
        money = money.split(",").join("");

        money = money.substring(0, money.length);
        money = Number(money);
        money = money.toLocaleString();
        money = money + "원";
        $(putMoney).html(money);
      }
    },
    markCommas: function(className) {
      var len = $(className).length;
      // alert(len);
      for (var i = 0; i < len; i++) {
        console.log($(className)[i]);
        this.markComma($(className)[i]);
      }
    },
    markComma: function(element) {
      // alert("makr");
      var money = $(element).html();
      console.log(element);
      if (money.includes(",")) return;
      money = money.trim().replace("원", "");
      console.log(money);
      if (money !== "0원" && !money.includes(",")) {
        money = Number(money);
        money = money.toLocaleString();
        money = money + "원";
        $(element).html(money);
      }
    }
  }
  // data: function() {
  //   return {
  //     product: {
  //       id: 1,
  //       name: "제품 1",
  //       subname: "서브 1",
  //       image0:
  //         "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //       image1:
  //         "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //       funded_count: 112,
  //       funded_money: 12111,
  //       funding_day: "ㅁㄴㅇㅁㄴㅇㅁ",
  //       remain_day: "",
  //       goods_dilivery_date_s: "1 ~ 5",
  //       youtb_url: "111",
  //       video_text: "\r\nhello world\r\n가즈아\r\n",
  //       bill_url: "https://google.com",
  //       design_purpose:
  //         "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //       packages: [
  //         {
  //           id: 10,
  //           remain_count: 0,
  //           name: "A",
  //           image0:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //           content: "content sds",
  //           price: 100000
  //         },
  //         {
  //           id: 1,
  //           remain_count: 1,
  //           name: "B",
  //           content: "content sds",
  //           image0:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //           price: 100000
  //         }
  //       ],
  //       product_timelines: [
  //         {
  //           name: "ti me aa",
  //           issued_at: "231 d11",
  //           image0:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
  //         }
  //       ],
  //       maker_responses: [
  //         {
  //           id: 22,
  //           name: "has!!",
  //           maker: {
  //             image0:
  //               "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //             desc2: "desc2 dsdflskdnf"
  //           }
  //         }
  //       ],
  //       product_options: [
  //         {
  //           id: 11,
  //           name: "hello",
  //           image0:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //           package_names: ["A", "B", "C"],
  //           content: "Hello Wolrd <br><BR>"
  //         },
  //         {
  //           id: 11,
  //           image0:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //           package_names: ["A", "B", "C"],
  //           content: "Hello Wolrd <br><BR>"
  //         },
  //         {
  //           id: 11,
  //           image0:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
  //           package_names: ["A", "B", "C"],
  //           content: "Hello Wolrd <br><BR>"
  //         }
  //       ],
  //       caros: [
  //         {
  //           id: 1,
  //           url:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
  //         },
  //         {
  //           id: 1,
  //           url:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
  //         },
  //         {
  //           id: 1,
  //           url:
  //             "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
  //         }
  //       ]
  //     }
  //   };
  // }
};
</script>
