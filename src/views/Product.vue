<template>
  <div>
    <div class="wrapper">
      <ProductImg :product="product"/>
      <!--<%=render 'product_info', collection: @product%>-->
      <!--<ProductInfo :product="product" />-->
      <ProductNav />
      <ProductContent :product="product" />
    </div>
    <!--<%=render 'bottom_bar', collection: @product%>-->
  </div>
</template>

<script>
import ProductImg from "@/components/Product/ProductImg";
import ProductInfo from "@/components/Product/ProductInfo";
import Navbar from "@/components/HeaderMenu/Navbar";
import ProductNav from "@/components/Product/ProductNav";
import ProductContent from "@/components/Product/ProductContent";

export default {
  name: "Product",
  components: { ProductContent, ProductNav, Navbar, ProductInfo, ProductImg },
  data: function() {
    return {
      product: {
        id: 1,
        title: "제품 1",
        subname: "서브 1",
        image:
          "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
        image1:
          "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
        funded_count: 112,
        funded_money: 12111,
        funding_day: "ㅁㄴㅇㅁㄴㅇㅁ",
        goods_dilivery_date_s: "1 ~ 5",
        youtb_url: "111",
        video_text: "hello world<br>",
        bill_url: "https://google.com",
        design_purpose:
          "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
        product_timelines: [
          {
            name: "ti me aa",
            issued_at: "231 d11",
            image0: "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg"
          }
        ],
        maker_responses: [
          {
            id: 22,
            name: "has!!",
            maker: {
              image0: "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
              desc2: "desc2 dsdflskdnf"
            }
          }
        ],
        product_options: [
          {
            id: 11,
            image:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
            package_names: ["A", "B", "C"],
            content: "Hello Wolrd <br><BR>"
          },
          {
            id: 11,
            image:
              "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
            package_names: ["A", "B", "C"],
            content: "Hello Wolrd <br><BR>"
          },
          {
            id: 11,
            image:
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
