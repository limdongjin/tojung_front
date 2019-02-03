<template>
  <div>
    <div class="dropdown my-3 w-100" id="myDropdown">
      <button
        aria-expanded="false"
        aria-haspopup="true"
        class="d-flex justify-content-between btn btn-white text-left dropdown-toggle d-flex justify-content-center"
        data-toggle="dropdown"
        id="packageButton"
        type="button"
      >
        <div class="package-info" id="package-default">
          <span>패키지 선택하기</span>
        </div>
        <span class="glyphicon glyphicon-chevron-down"> </span>
      </button>

      <ul aria-labelledby="packageButton" class="dropdown-menu w-100 py-0">
        <li
          v-for="productPackage in packages"
          :class="packageClasses(productPackage)"
          v-on:click="packageDropdown($event, product.id, productPackage)"
          :id="packageId(productPackage)"
        >
          <div class="soldout-text" v-if="isSoldOut(productPackage)">
            품절
          </div>
          <img
            :src="imageUrl(productPackage)"
            class="package-item mx-3 my-3 hide"
            :id="productPackage.id"
          />

          <div class="package-info w-100 d-flex justify-content-between">
            <div class="package-info-1 d-flex">
              <p class="mb-0 font-weight-bold mr-3 package-name">
                {{ productPackage.name }}
              </p>
              <p
                class="mb-0 mr-3"
                v-html="htmlSafe(productPackage.content)"
              ></p>
            </div>
            <p class="mb-0 font-red font-weight-bold package-price">
              {{ productPackage.price }}원
            </p>
          </div>
        </li>
      </ul>
    </div>
    <li
      class="d-flex"
      id="packageContainer"
      v-for="productPackage in packages"
    ></li>
  </div>
</template>
<script>
export default {
  name: "PackageDropdown",
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    packages: function() {
      return this.product.packages;
    }
  },
  methods: {
    imageUrl: function(productPackage) {
      if (!productPackage || !productPackage.image0) return;
      return productPackage.image0.url;
    },
    isSoldOut: function(productPackage) {
      return productPackage.remain_count === 0;
    },
    packageId: function(productPackage) {
      return "package-id-" + productPackage.id;
    },
    packageClasses: function(productPackage) {
      if (this.isSoldOut(productPackage))
        return "d-flex package-box bg-overlay soldout-item";
      else return "d-flex package-box";
    },
    htmlSafe: function(content) {
      var res = content;
      for (var i = 0; i < content.length; i++) {
        res = res.replace("\r\n", "<br />");
      }
      return res;
    },
    packageDropdown: function(event, product_id, productPackage) {
      if (this.isSoldOut(productPackage)) return;
      // console.log("dropdown")
      let x = $("#package-id-" + productPackage.id).html();
      // let x = $(event.target).html();
      // console.log(x)
      $("#packageButton").html(x);
      $("#packageContainer").html(x);
      $("#packageContainer").addClass("package-box2 my-3");
      $("#packageContainer > .package-info").removeClass("d-flex");
      $("#packageContainer > .package-info").addClass("my-3");
      $(
        "#packageContainer > .package-info > .package-info-1 > .package-name"
      ).unwrap();
      $("#packageContainer > .package-item")
        .removeClass("hide")
        .addClass("show");
      var pid = $("#packageButton").children()[0].id;
      $("#pay-link-lg").attr(
        "href",
        `/product_order/new?product_id=${product_id.toString()}&package_id=${pid}`
      );
    }
  }
};
</script>
