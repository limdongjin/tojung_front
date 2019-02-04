<template>
  <div>
    <ProductMobileImg />
    <ProductMobileInfo />
    <ProductDesktopInfo />
  </div>
</template>

<script>
import ProductMobileImg from "@/components/Product/Info/Mobile/ProductMobileImg";
import ProductMobileInfo from "@/components/Product/Info/Mobile/ProductMobileInfo";
import ProductDesktopInfo from "@/components/Product/Info/Desktop/ProductDesktopInfo";
export default {
  name: "ProductInfo",
  components: { ProductDesktopInfo, ProductMobileInfo, ProductMobileImg }
};
</script>

<style scoped></style>
