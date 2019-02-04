<template>
  <div>
    <ProductsMobile />
    <ProductsDesktop />
  </div>
</template>

<script>
import ProductsDesktop from "@/components/Home/Products/ProductsDesktop";
import ProductsMobile from "@/components/Home/Products/ProductsMobile";

export default {
  name: "Products",
  components: { ProductsDesktop, ProductsMobile }
};
</script>

<style scoped></style>
