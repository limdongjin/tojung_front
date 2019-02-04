<template>
  <div
    class="tab-pane fade show active"
    id="description"
    role="tabpanel"
    aria-labelledby="description-tab"
  >
    <ProductCarousel />
    <YoutubeIframe :youtube-url="youtubeUrl" />

    <p class="video-text mb-4 px-3" v-html="videoText"></p>

    <a
      :href="product.bill_url"
      class="d-block text-center font-weight-bold font-black font-16 pro-link px-3 py-2 mx-5 my-4"
      >법안 원문 보러가기</a
    >
    <FbIframeShare :url="fbShareUrl" />

    <div class="banner-text px-3 mb-5">
      <hr class="mb-4 banner-line ml-0" />
      <pre class="font-22 font-weight-bold">
내 인생으로 배송받기를 누르면
국회에 청원이 전달되고,
법안을 공론화하는 광고가 실리고,
예쁜 굿즈를 받습니다</pre
      >
      <hr class="mt-4 banner-line ml-0" />
    </div>

    <!-- 디자인 의도 이미지-->
    <img
      v-lazy="designPurpose"
      class="design-purpose mb-5 w-100 lazy-blur"
      v-if="designPurpose"
    />

    <ProductOptions />
    <PackageSummaryImage />
    <ProductDiliveryDesc :isend="isEnd" :days="product.goods_dilivery_date_s" />
    <Campaign />
    <RefundPolicy />
  </div>
</template>
<script>
import ProductCarousel from "@/components/Product/Content/Description/ProductCarousel";
import YoutubeIframe from "@/components/SocialUtil/YoutubeIframe";
import FbIframeShare from "@/components/SocialUtil/FbIframeShare";
import ProductOptions from "@/components/Product/Content/Description/ProductOptions";
import Campaign from "@/components/Product/Content/Description/Campaign";
import RefundPolicy from "@/components/Product/Content/Description/RefundPolicy";
import ProductDiliveryDesc from "@/components/Product/Content/Description/ProductDiliveryDesc";
import PackageSummaryImage from "@/components/Product/Content/Description/PackageSummaryImage";

export default {
  name: "ProductDescription",
  components: {
    ProductCarousel,
    PackageSummaryImage,
    ProductDiliveryDesc,
    RefundPolicy,
    Campaign,
    ProductOptions,
    FbIframeShare,
    YoutubeIframe
  },
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    image1Url: function() {
      // if (!this.product || !this.product.image1) return;
      return this.product.image1.url;
    },
    youtubeUrl: function() {
      return `https://www.youtube.com/embed/${
        this.product.youtb_url
      }?controls=2`;
    },
    videoText: function() {
      if (!this.product.video_text) return;
      var res = this.product.video_text;
      for (var i = 0; i < this.product.video_text.length; i++) {
        res = res.replace("\r\n", "<br />");
      }
      return res;
    },
    fbShareUrl: function() {
      let app_id = "1014670008686658";
      let product_id = this.product.id;
      return `https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ftojung.me/product/${product_id}&width=450&layout=button_count&action=like&size=small&show_faces=true&share=true&height=80&appId=${app_id}`;
    },
    designPurpose: function() {
      if (!this.product.design_purpose) return false;
      // console.log(this.product.design_purpose)
      return this.product.design_purpose.url;
    },
    isEnd: function() {
      return this.product.isEnd;
    }
  }
};
</script>
