<template>
  <div class="dropdown dropdown-share">
    <button
      aria-expanded="false"
      aria-haspopup="true"
      class="share-button dropdown-toggle"
      data-toggle="dropdown"
    >
      공유하기
    </button>
    <ul class="dropdown-menu" id="shareDropdown">
      <ProductDesktopKakaoShare
        :share-title="product.name"
        :shareDescription="product.subname"
        :imageUrl="imageUrl"
      />
      <ProductDesktopFbShare />
    </ul>
  </div>
</template>
<script>
import ProductDesktopFbShare from "@/components/Product/Info/Desktop/Share/ProductDesktopFbShare";
import ProductDesktopKakaoShare from "@/components/Product/Info/Desktop/Share/ProductDesktopKakaoShare";

export default {
  name: "ProductDesktopShare",
  // props: ["product"],
  components: { ProductDesktopFbShare, ProductDesktopKakaoShare },
  computed: {
    product() {
      return this.$store.getters.product;
    },
    imageUrl() {
      if (!this.product || !this.product.image0) {
        return;
      }
      return this.product.image0.url;
    }
  }
};
</script>
