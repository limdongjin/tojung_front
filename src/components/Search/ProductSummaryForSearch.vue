<template>
  <a :href="link" class="d-block h-100 mx-auto">
    <progressive-img
      :src="product.image0"
      class="pro-thumbimg"
      :placeholder="product.image0"
      :blur="30"
    />
    <div class="card-body visible-lg-only font-14">
      <div class="d-flex justify-content-between">
        <h5 class="card-title text-black font-weight-bold mb-0 font-18">
          {{ product.name }}
        </h5>
        <!-- 이부분 000명으로 수정 -->
        <span class="font-red font-weight-bold font-18"></span>
      </div>
      <p class="card-text mb-2 font-14">
        {{ product.subname }}
      </p>
      <div class="d-flex font-14 justify-content-between">
        <!-- <span class="funding-money"><% product.funded_money%></span> -->
        <span class="funding-days">
          <!--{{ // product.funding_day}}-->
        </span>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "ProductSummaryForSearch",
  props: ["product"],
  computed: {
    link() {
      return `/product/${this.product.id}`;
    }
  }
};
</script>
