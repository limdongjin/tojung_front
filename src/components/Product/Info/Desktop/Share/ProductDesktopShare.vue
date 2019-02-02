<template>
  <div class="dropdown dropdown-share">
    <button
      aria-expanded="false"
      aria-haspopup="true"
      class="share-button dropdown-toggle"
      data-toggle="dropdown"
    >
      공유하기 for desk tes
    </button>
    <ul class="dropdown-menu" id="shareDropdown">
      <ProductDesktopKakaoShare />
      <ProductDesktopFbShare />
    </ul>
  </div>
</template>
<script>
import ProductDesktopFbShare from "@/components/Product/Info/Desktop/Share/ProductDesktopFbShare";
import ProductDesktopKakaoShare from "@/components/Product/Info/Desktop/Share/ProductDesktopKakaoShare";

export default {
  name: "ProductDesktopShare",
  components: { ProductDesktopFbShare, ProductDesktopKakaoShare }
};
</script>
