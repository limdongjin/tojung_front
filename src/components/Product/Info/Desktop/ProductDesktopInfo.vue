<template>
  <div class="d-flex visible-lg py-3 pro-info-wrapper justify-content-center">
    <ProductDesktopImg :image="product.image0" />
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
        :money="product.funded_money"
        :count="product.funded_count"
        description="구현중 "
        classes="pro-money d-flex font-18 font-weight-bold justify-content-between"
      />
      <PackageDropDown :product="product" />

      <div class="buttons">
        <div class="d-flex">
          <ProductDesktopShare />
          <ProductDesktopLike :product="product" :isLike="isLike" />
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
  props: ["product"],
  mounted: function() {
    this.setDropdownShareWidth();
    this.markCommas();
  },
  data: function() {
    return {
      productPackages: this.product.packages
    };
  },
  methods: {
    markCommas: function() {
      let money = $(".funding-money").html();
      if (money !== "0원") {
        money = money.substring(0, money.length - 1);
        money = Number(money);
        money = money.toLocaleString();
        if (!isNaN(money)) {
          money = money + "원";
          $(".funding-money").html(money);
        }
      }
    },
    setDropdownShareWidth: function() {
      var x = $("#dropdownShare").width();
      $("#shareDropdown").width(x);
    }
  },
  computed: {
    isEnd: function() {
      return this.product.isEnd;
    },
    isLike: function() {
      // 구현중 !!
      return false;
    }
  }
};
</script>
