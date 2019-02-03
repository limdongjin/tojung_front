<template>
  <nav id="shareBar" class="bg-white visible-xs-flex">
    <section class="share w-100">
      <KakaoShare
        :webUrl="currentUrl"
        classes="kakao_icon d-block mx-auto mb-3"
        :shareTitle="product.name"
        :shareDescription="product.subname"
        :imageUrl="imageUrl"
      />
      <FbShare :webUrl="currentUrl" classes="d-block mx-auto mb-3" />
    </section>
  </nav>
</template>
<script>
import FbShare from "@/components/SocialUtil/FbShare";
import KakaoShare from "@/components/SocialUtil/KakaoShare";
export default {
  name: "ProductMobileShareBar",
  components: { KakaoShare, FbShare },
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    fbSvg: function() {
      return require("@/assets/fb.svg");
    },
    fbShareLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=https://tojung.me${
        this.$route.path
      }&amp;src=sdkpreparse`;
    },
    currentUrl: function() {
      return `https://tojung.me/${this.$route.path}`;
    },
    imageUrl: function() {
      if (!this.product || !this.product.image0) return;
      return this.product.image0.url;
    }
  }
};
</script>
