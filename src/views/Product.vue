<template>
  <div>
    <div class="wrapper">
      <ProductMobileImg :product="product" />
      <ProductMobileInfo :product="product" />
      <ProductDesktopInfo :product="product" />
      <ProductNav />
      <ProductContent :product="product" />
    </div>
    <ProductBottomBar :product="product" />
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
  data: function() {
    return {
      product: {
        id: 1,
        title: "제품 1",
        subname: "서브 1",
        image0:
          "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
        image1:
          "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
        funded_count: 112,
        funded_money: 12111,
        funding_day: "ㅁㄴㅇㅁㄴㅇㅁ",
        remain_day: "",
        goods_dilivery_date_s: "1 ~ 5",
        youtb_url: "111",
        video_text: "hello world<br>",
        bill_url: "https://google.com",
        design_purpose:
          "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
        packages: [
          {
            id: 10,
            remain_count: 0,
            name: "package 11",
            image0:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
            content: "content sds",
            price: 1000
          },
          {
            id: 1,
            remain_count: 1,
            name: "package 11",
            content: "content sds",
            image0:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
            price: 1000
          }
        ],
        product_timelines: [
          {
            name: "ti me aa",
            issued_at: "231 d11",
            image0:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
          }
        ],
        maker_responses: [
          {
            id: 22,
            name: "has!!",
            maker: {
              image0:
                "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
              desc2: "desc2 dsdflskdnf"
            }
          }
        ],
        product_options: [
          {
            id: 11,
            name: "hello",
            image0:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
            package_names: ["A", "B", "C"],
            content: "Hello Wolrd <br><BR>"
          },
          {
            id: 11,
            image0:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
            package_names: ["A", "B", "C"],
            content: "Hello Wolrd <br><BR>"
          },
          {
            id: 11,
            image0:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
            package_names: ["A", "B", "C"],
            content: "Hello Wolrd <br><BR>"
          }
        ],
        caros: [
          {
            id: 1,
            url:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
          },
          {
            id: 1,
            url:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
          },
          {
            id: 1,
            url:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
          }
        ]
      }
    };
  }
};
</script>
