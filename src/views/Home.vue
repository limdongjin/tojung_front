<template>
  <div>
    <Carousel />
    <div class="wrapper mt-0 loaded">
      <Categories />
      <CategoryTag />
      <Products />
      <MdContents />
      <BottomBar />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Home/Carousel/Carousel.vue";
import Categories from "@/components/Home/Categories.vue";
import BottomBar from "@/components/Home/BottomBar";
import MdContents from "@/components/Home/MdContents";
import CategoryTag from "@/components/Home/CategoryTag";
import Products from "@/components/Home/Products/Products"; // @ is an alias to /src

export default {
  components: {
    Products,
    CategoryTag,
    MdContents,
    BottomBar,
    Categories,
    Carousel
  },
  beforeCreate() {
    this.$store.dispatch("SET_PRODUCTS");
  },
  computed: {
    products: function() {
      return this.$store.getters.products;
    }
  }
};
</script>
