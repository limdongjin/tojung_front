<template>
  <nav id="packageBar" class="bg-white visible-xs">
    <div class="dismiss">
      <h4 class="font-14 font-weight-bold text-center my-3 package-title">
        패키지 선택하기
      </h4>
      <div class="package-row scrolling-wrapper">
        <div
          v-for="productPackage in packages"
          :class="packageClasses(productPackage)"
        >
          <div
            class="soldout-text-mobile font-12"
            v-if="isSoldOut(productPackage)"
          >
            품절
          </div>
          <img
            :src="productPackage.image0.url"
            class="package-img overlay-behind d-block mx-auto"
            :id="productPackage.id"
          />
          <div class="card-body2 overlay-behind text-center py-1 font-14">
            <p class="font-red mb-1 product-money">
              {{ productPackage.price }}원
            </p>
            <h5 class="text-black font-weight-bold mb-1 font-14" lang="en">
              {{ productPackage.name }}
            </h5>
            <pre class="font-12 mb-2 package-content">
                <!--<%= package.content.gsub("\r\n", "<br/>").html_safe %>-->
               {{ productPackage.content }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "PackageBar",
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    packages: function() {
      if (!this.product) return;
      return this.product.packages;
    }
  },
  methods: {
    isSoldOut: function(productPackage) {
      return productPackage.remain_count === 0;
    },
    packageClasses: function(productPackage) {
      return this.isSoldOut(productPackage)
        ? "card bg-overlay rounded-0"
        : "card bg-white z-1";
    }
  }
};
</script>
