<template>
  <div
    class="tab-pane fade show active"
    id="description"
    role="tabpanel"
    aria-labelledby="description-tab"
  >
    <ProductCarousel :carousel-images="carouselImages" />
    <YoutubeIframe :youtube-url="youtubeUrl" />

    <p class="video-text mb-4 px-3">
      {{ videoText }}
    </p>

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
    <progressive-img
      :src="designPurpose"
      :placeholder="designPurpose"
      :blur="30"
      class="design-purpose mb-5 w-100"
    ></progressive-img>

    <ProductOptions :product_options="product.product_options" />

    <section class="package my-5 mx-4">
      <h4 class="font-18 font-weight-bold mb-4">PACKAGE 정리</h4>
      <!--<%=image_tag(@cdn_url + @product.image1.path, class: "d-block-->
      <!--package-set") if @product.image1.path != nil%>-->
      <progressive-img
        :src="product.image1"
        :placeholder="product.image1"
        :blur="30"
        class="d-block package-set"
      >
      </progressive-img>
    </section>

    <section class="delivery mb-5 mx-4 font-14">
      <h4 class="font-18 font-weight-bold mb-4">배송 예정일</h4>
      <div class="delivery text pl-1">
        <!-- 광고 펀딩중-->
        <p class="mb-0" v-if="!isEnd">현재 광고 펀딩중입니다.</p>
        <p class="mb-0" v-if="!isEnd">
          지금 주문하시면
          <span>{{ product.goods_dilivery_date_s }}</span>
          일 배송예정입니다.
        </p>
        <p v-if="!isEnd">배송이 시작되면 문자로 알려드립니다.</p>
        <!-- 상시 펀딩 중-->
        <p class="mb-0" v-if="isEnd">현재 상시 펀딩중입니다.</p>
        <p v-if="isEnd">배송은 3~7일(영업일기준) 소요됩니다.</p>
      </div>
    </section>
    <Campaign />
    <RefundPolicy />
  </div>
</template>
<script>
import ProductCarousel from "@/components/Product/ProductCarousel";
import YoutubeIframe from "@/components/Product/YoutubeIframe";
import FbIframeShare from "@/components/Product/FbIframeShare";
import ProductOptions from "@/components/Product/ProductOptions";
import Campaign from "@/components/Product/Campaign";
import RefundPolicy from "@/components/Product/RefundPolicy";

export default {
  name: "ProductDescription",
  components: {
    RefundPolicy,
    Campaign,
    ProductOptions,
    FbIframeShare,
    YoutubeIframe,
    ProductCarousel
  },
  props: ["product"],
  computed: {
    carouselImages: function() {
      if (!this.product.caros) return [];
      return this.product.caros;
    },
    youtubeUrl: function() {
      return `https://www.youtube.com/embed/${
        this.product.youtb_url
      }?controls=2`;
    },
    videoText: function() {
      // product.video_text.gsub("\r\n", "<br />").html_safe
      return this.product.video_text;
    },
    fbShareUrl: function() {
      let app_id = "1014670008686658";
      let product_id = this.product.id.toString();
      return `https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ftojung.me/product/${product_id}&width=450&layout=button_count&action=like&size=small&show_faces=true&share=true&height=80&appId=${app_id}`;
    },
    designPurpose: function() {
      return this.product.design_purpose;
    },
    isEnd: function() {
      return this.product.isEnd;
    }
  }
};
</script>
