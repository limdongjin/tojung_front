<template>
  <a :href="link" class="d-block h-100">
    <img
      v-lazy="product.image0.url"
      class="pro-thumbimg lazy-blur"
      alt="image"
      width="306"
      height="306"
      v-if="!mobile"
    />
    <div class="card-body visible-lg-only font-14" style="padding: 14px 0;">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title text-black font-weight-bold mb-0 font-18">
          {{ product.name }}
        </h5>
        <!-- 이부분 000명으로 수정 -->
        <span class="card-count font-red font-weight-bold font-18">
          {{ product.funded_count }}명
        </span>
      </div>
      <p class="card-text mb-2 font-14">
        {{ product.subname }}
      </p>
      <div class="d-flex font-14 justify-content-between">
        <span class="funding-money"> {{ product.funded_money }}원 </span>
        <span class="funding-days">
          <!--{{ // product.funding_day }}-->
        </span>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "ProductSummary",
  props: ["product", "mobile"],
  computed: {
    link() {
      return `/product/${this.product.id}`;
    }
  }
};
</script>
