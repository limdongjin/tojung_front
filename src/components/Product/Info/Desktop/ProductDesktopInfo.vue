<template>
  <div class="d-flex visible-lg py-3 pro-info-wrapper justify-content-center">
    <ProductDesktopImg />
    <div class="pro-info">
      <div class="product-title">
        <h4 class="font-24 font-weight-bold">
          {{ product.name }}
        </h4>
        <p class="font-18">
          {{ product.subname }}
        </p>
      </div>
      <ProductFunding
        :description="fundingDescription"
        classes="pro-money d-flex font-18 font-weight-bold justify-content-between"
      />
      <PackageDropDown />

      <div class="buttons">
        <div class="d-flex">
          <ProductDesktopShare />
          <ProductDesktopLike />
        </div>
        <ProductDesktopSubmit />
      </div>
    </div>
  </div>
</template>
<script>
import ProductDesktopLike from "@/components/Product/Info/Desktop/ProductDesktopLike";
import ProductDesktopImg from "@/components/Product/Info/Desktop/ProductDesktopImg";
import PackageDropDown from "@/components/Product/Info/Desktop/PackageDropdown";
import ProductFunding from "@/components/Product/Info/ProductFunding";
import ProductDesktopShare from "@/components/Product/Info/Desktop/Share/ProductDesktopShare";
import ProductDesktopSubmit from "@/components/Product/Info/Desktop/ProductDesktopSubmit";

export default {
  name: "ProductDesktopInfo",
  components: {
    ProductDesktopSubmit,
    ProductDesktopShare,
    ProductFunding,
    PackageDropDown,
    ProductDesktopImg,
    ProductDesktopLike
  },
  // props: ["product"],
  mounted: function() {
    this.setDropdownShareWidth();
    // this.markCommas();
    // console.log(this.$route.path)
  },
  methods: {
    setDropdownShareWidth: function() {
      var x = $("#dropdownShare").width();
      $("#shareDropdown").width(x);
    }
  },
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    isEnd: function() {
      return this.product.isEnd;
    },
    isLike: function() {
      return this.product.isLike;
    },
    fundingDescription: function() {
      if (this.isEnd) return "상시펀딩중";
      else return "광고펀딩중";
    }
  }
};
</script>
