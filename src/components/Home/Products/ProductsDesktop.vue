<template>
  <div class="container visible-lg card-desktop">
    <div class="row justify-content-between thumb-row">
      <div class="card border-0 mb-md-3 mx-md-1" v-for="product in products">
        <ProductSummary :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductSummary from "@/components/Home/Products/ProductSummary.vue";

export default {
  name: "ProductsDesktop",
  components: { ProductSummary },
  data: function() {
    return {
      products: [
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },{
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
                  "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 2,
          title: "제품 2",
          subname: "서브 2",
          image:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 231,
          funded_money: 123113,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        }
      ]
    };
  }
};
</script>
