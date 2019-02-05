<template>
  <div>
    <!-- Bottom bar -->
    <div class="overlay2"></div>
    <nav
      class="navbar bottom-bar py-2 fixed-bottom align-items-center text-center visible-xs-flex"
    >
      <ProductMobileSubmit />

      <ProductMobileLike />

      <ProductMobileShareOpenButton />
    </nav>
    <PackageBar />
    <ProductMobileShareBar />
  </div>
</template>

<script>
import ProductMobileLike from "@/components/Product/BottomBar/ProductMobileLike";
import ProductMobileSubmit from "@/components/Product/BottomBar/ProductMobileSubmit";
import ProductMobileShareOpenButton from "@/components/Product/BottomBar/ProductMobileShareOpenButton";
import PackageBar from "@/components/Product/BottomBar/PackageBar";
import ProductMobileShareBar from "@/components/Product/BottomBar/ProductMobileShareBar";

export default {
  name: "ProductBottomBar",
  // props: ["product"],
  components: {
    ProductMobileShareBar,
    PackageBar,
    ProductMobileShareOpenButton,
    ProductMobileSubmit,
    ProductMobileLike
  },
  computed: {
    isLike: function() {
      return this.product.isLike;
    },
    product: function() {
      return this.$store.getters.product;
    }
  },
  mounted: function() {
    this.unwrapBottomBar();
  },
  methods: {
    unwrapBottomBar: function() {
      $(".bottom-bar").unwrap();
      $(".overlay2").unwrap();
    },
    doBlink: function() {
      $(".pay-link").toggleClass("hidden0");
    }
  }
};
</script>
